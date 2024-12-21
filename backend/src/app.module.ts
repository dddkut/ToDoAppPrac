import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from './firebase/firebase.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [FirebaseModule, AuthModule, TaskModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
