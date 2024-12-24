import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { FirebaseModule } from '../firebase/firebase.module';
import { FirebaseService } from '../firebase/firebase.service';

@Module({
  imports: [FirebaseModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
