import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IBaseRepository } from 'src/common/interfaces/base-repository.interfase';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { defaultSorting } from 'src/common/constants/read-all/sorting-default';
import { Task } from '../domain/entity/task.entity';
import { CreateTaskDto } from '../domain/dto/create-task.dto';
import { IReadAllTaskOptions } from '../domain/interfaces/read-all-task.interface';
import { defaultPagination } from 'src/common/constants/read-all/pagination-default';
import { TaskFiltration } from '../domain/filter/task.filter';
import { UpdateTaskDto } from '../domain/dto/update-task.dto';

@Injectable()
export class TaskRepository implements IBaseRepository<Task> {
  constructor(@InjectModel(Task) private readonly task: typeof Task) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.task.create(createTaskDto);
  }

  async readAll(readAllOptions: IReadAllTaskOptions): Promise<ReadAllResult<Task>> {
    const pagination = readAllOptions.pagination ?? defaultPagination;
    const sorting = readAllOptions.sorting ?? defaultSorting;
    const filters = TaskFiltration.getLikeFilter(readAllOptions.filters);

    const { count, rows } = await this.task.findAndCountAll({
      where: { ...filters.task },
      distinct: true,
      limit: pagination.size,
      offset: pagination.offset,
      order: [[sorting.column, sorting.direction]],
    });

    return {
      totalRecordsNumber: count,
      records: rows,
    };
  }

  async readById(id: string): Promise<Task> {
    return await this.task.findByPk(id);
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const [rows, records] = await this.task.update(updateTaskDto, {
      where: { id },
      returning: true,
    });
    return records[0];
  }

  async delete(id: string): Promise<void> {
    await this.task.destroy({ where: { id } });
  }
}
