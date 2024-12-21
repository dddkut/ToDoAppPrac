import {
  IsNotEmpty,
  IsString,
  IsEnum,
  IsOptional,
  IsNumber,
} from 'class-validator';

enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

enum TaskStatus {
  NOT_STARTED = 'Not Started',
  IN_PROGRESS = 'In Progress',
  FINISHED = 'Finished',
}

export class CreateTaskDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  due?: number;

  @IsOptional()
  @IsString()
  inCharge?: string; //TODO: 担当者(メンバー)の型を考える

  @IsOptional()
  @IsEnum(Priority)
  priority?: Priority;
}

export class UpdateTaskDto {
  @IsNotEmpty()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  due?: number;

  @IsOptional()
  @IsString()
  inCharge?: string; //TODO: 担当者(メンバー)の型を考える

  @IsOptional()
  @IsEnum(Priority)
  priority?: Priority;
}
