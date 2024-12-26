import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, UpdateTaskDto } from 'src/dto/task.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('task')
@UseGuards(AuthGuard) //verify token
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTask(@Req() req, @Body() createTaskDto: CreateTaskDto) {
    const userId = req.user.uid; // Firebase Authentication uid
    return this.taskService.createTask(userId, createTaskDto);
  }

  @Get()
  getUserTasks(@Req() req) {
    const userId = req.user.uid;
    return this.taskService.getUserTasks(userId);
  }

  @Get(':id')
  getTask(@Req() req, @Param('id') id: string) {
    const userId = req.user.uid;
    return this.taskService.getTask(userId, id);
  }

  @Patch(':id')
  updateTask(
    @Req() req,
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    const userId = req.user.uid;
    return this.taskService.updateTask(userId, id, updateTaskDto);
  }

  @Delete(':id')
  deleteTask(@Req() req, @Param('id') id: string) {
    const userId = req.user.uid;
    return this.taskService.deleteTask(userId, id);
  }
}
