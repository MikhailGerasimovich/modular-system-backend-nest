import { Injectable } from '@nestjs/common';
import { IBaseService } from 'src/common/interfaces/base-service.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { Task } from '../domain/entity/task.entity';
import { TaskRepository } from '../infrastructure/task.repository';
import { CreateTaskDto } from '../domain/dto/create-task.dto';
import { IReadAllTaskOptions } from '../domain/interfaces/read-all-task.interface';
import { UpdateTaskDto } from '../domain/dto/update-task.dto';

@Injectable()
export class TaskService implements IBaseService<Task> {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = await this.taskRepository.create(createTaskDto);
    return task;
  }

  async readAll(readAllOptions: IReadAllTaskOptions): Promise<ReadAllResult<Task>> {
    const tasks = await this.taskRepository.readAll(readAllOptions);
    return tasks;
  }

  async readById(id: string): Promise<Task> {
    const task = await this.taskRepository.readById(id);
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.taskRepository.update(id, updateTaskDto);
    return task;
  }

  async delete(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
