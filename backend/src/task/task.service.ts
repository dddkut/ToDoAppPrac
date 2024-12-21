import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from 'src/dto/task.dto';
import { Task } from 'src/entity/task.entity';
import { FirebaseService } from 'src/firebase/firebase.service';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {
  constructor(private readonly firebaseService: FirebaseService) {}

  private readonly db = this.firebaseService.getFirestore();

  // get task list for a user
  async getUserTasks(userId: string): Promise<Task[]> {
    const snapshot = await this.db
      .collection('tasks')
      .where('userId', '==', userId)
      .get();

    if (snapshot.empty) {
      return [];
    }

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Task);
  }

  // get a task
  async getTask(userId: string, taskId: string): Promise<Task> {
    const docRef = this.db.collection('tasks').doc(taskId);
    const snapshot = await docRef.get();

    if (!snapshot.exists || snapshot.data()?.userId !== userId) {
      throw new NotFoundException('Task not found or access denied.');
    }

    return { id: snapshot.id, ...snapshot.data() } as Task;
  }

  //create a task
  async createTask(
    userId: string,
    createTaskDto: CreateTaskDto,
  ): Promise<Task> {
    const task = {
      id: uuid,
      status: 'Not Started',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
      userId,
      ...createTaskDto,
    };

    const docRef = await this.db.collection('tasks').add(task);
    const result = await docRef.get();

    return { id: result.id, ...result.data() } as Task;
  }

  //update a task
  async updateTask(
    userId: string,
    taskId: string,
    updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    const docRef = this.db.collection('tasks').doc(taskId);
    const snapshot = await docRef.get();

    if (!snapshot.exists || snapshot.data()?.userId !== userId) {
      throw new NotFoundException('Task not found or access denied.');
    }

    const updatedData = {
      ...updateTaskDto,
      updatedAt: new Date().getTime(),
    };

    await docRef.update(updatedData);
    const updatedSnapshot = await docRef.get();

    return { id: updatedSnapshot.id, ...updatedSnapshot.data() } as Task;
  }

  // タスクを削除
  async deleteTask(userId: string, taskId: string): Promise<boolean> {
    const docRef = this.db.collection('tasks').doc(taskId);
    const snapshot = await docRef.get();

    if (!snapshot.exists || snapshot.data()?.userId !== userId) {
      throw new NotFoundException('Task not found or access denied.');
    }

    await docRef.delete();
    return true;
  }
}
