import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from 'src/dto/task.dto';
import { Task } from 'src/entity/task.entity';
import { FirebaseService } from 'src/firebase/firebase.service';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {
  constructor(private readonly firebaseService: FirebaseService) {}

  private readonly db = this.firebaseService.getFirestore();

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
}
