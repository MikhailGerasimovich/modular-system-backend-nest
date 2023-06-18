import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IBaseRepository } from 'src/common/interfaces/base-repository.interfase';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { defaultSorting } from 'src/common/constants/read-all/sorting-default';
import { Teacher } from '../domain/entity/teacher.entity';
import { CreateTeacherDto } from '../domain/dto/create-teacher.dto';
import { IReadAllTeacherOptions } from '../domain/interfaces/read-all-teacher.options';
import { defaultPagination } from 'src/common/constants/read-all/pagination-default';
import { TeacherFiltration } from '../domain/filter/teacher.filter';
import { UpdateTeacherDto } from '../domain/dto/update-teacher.dto';

@Injectable()
export class TeacherRepository implements IBaseRepository<Teacher> {
  constructor(@InjectModel(Teacher) private readonly teacher: typeof Teacher) {}

  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return await this.teacher.create(createTeacherDto);
  }

  async readAll(readAllOptions: IReadAllTeacherOptions): Promise<ReadAllResult<Teacher>> {
    const pagination = readAllOptions.pagination ?? defaultPagination;
    const sorting = readAllOptions.sorting ?? defaultSorting;
    const filters = TeacherFiltration.getLikeFilter(readAllOptions.filters);

    const { count, rows } = await this.teacher.findAndCountAll({
      where: { ...filters.teacher },
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

  async readById(id: string): Promise<Teacher> {
    return await this.teacher.findByPk(id);
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto): Promise<Teacher> {
    const [rows, records] = await this.teacher.update(updateTeacherDto, {
      where: { id },
      returning: true,
    });
    return records[0];
  }

  async delete(id: string): Promise<void> {
    await this.teacher.destroy({ where: { id } });
  }
}
