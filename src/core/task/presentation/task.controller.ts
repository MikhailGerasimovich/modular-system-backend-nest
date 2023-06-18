import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { IBaseController } from 'src/common/interfaces/base-controller.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { FrontendTask } from '../domain/types/task.frontend';
import { TaskService } from '../application/task.service';
import { CreateTaskDto } from '../domain/dto/create-task.dto';
import { ReadAllTaskDto } from '../domain/dto/read-all-task.dto';
import { UpdateTaskDto } from '../domain/dto/update-task.dto';

@Controller('task')
export class TaskController implements IBaseController<FrontendTask> {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createTaskDto: CreateTaskDto): Promise<FrontendTask> {
    const task = await this.taskService.create(createTaskDto);
    return new FrontendTask(task);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async readAll(@Query() readAllOptions: ReadAllTaskDto): Promise<ReadAllResult<FrontendTask>> {
    const { pagination, sorting, ...filters } = readAllOptions;
    const tasks = await this.taskService.readAll({ pagination, sorting, filters });
    return {
      totalRecordsNumber: tasks.totalRecordsNumber,
      records: tasks.records.map((record) => new FrontendTask(record)),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async readById(@Param('id') id: string): Promise<FrontendTask> {
    const task = await this.taskService.readById(id);
    return new FrontendTask(task);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Promise<FrontendTask> {
    const task = await this.taskService.update(id, updateTaskDto);
    return new FrontendTask(task);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.taskService.delete(id);
  }
}
