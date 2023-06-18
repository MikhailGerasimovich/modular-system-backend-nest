import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IBaseRepository } from 'src/common/interfaces/base-repository.interfase';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { defaultSorting } from 'src/common/constants/read-all/sorting-default';
import { TeacherDiscipline } from '../domain/entity/teacher-discipline.entity';
import { CreateTeacherDisciplineDto } from '../domain/dto/create-teacher-discipline.dto';
import { IReadAllTeacherDisciplineOptions } from '../domain/interfaces/read-all-teacher-discipline.options';
import { defaultPagination } from 'src/common/constants/read-all/pagination-default';
import { TeacherDisciplineFiltration } from '../domain/filter/teacher-discipline.filter';
import { UpdateTeacherDisciplineDto } from '../domain/dto/update-teacher-discipline.dto';

@Injectable()
export class TeacherDisciplineRepository implements IBaseRepository<TeacherDiscipline> {
  constructor(@InjectModel(TeacherDiscipline) private readonly teacherDiscipline: typeof TeacherDiscipline) {}

  async create(createTeacherDisciplineDto: CreateTeacherDisciplineDto): Promise<TeacherDiscipline> {
    return await this.teacherDiscipline.create(createTeacherDisciplineDto);
  }

  async readAll(readAllOptions: IReadAllTeacherDisciplineOptions): Promise<ReadAllResult<TeacherDiscipline>> {
    const pagination = readAllOptions.pagination ?? defaultPagination;
    const sorting = readAllOptions.sorting ?? defaultSorting;
    const filters = TeacherDisciplineFiltration.getLikeFilter(readAllOptions.filters);

    const { count, rows } = await this.teacherDiscipline.findAndCountAll({
      where: { ...filters.teacherDiscipline },
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

  async readById(id: string): Promise<TeacherDiscipline> {
    return await this.teacherDiscipline.findByPk(id);
  }

  async update(id: string, updateTeacherDisciplineDto: UpdateTeacherDisciplineDto): Promise<TeacherDiscipline> {
    const [rows, records] = await this.teacherDiscipline.update(updateTeacherDisciplineDto, {
      where: { id },
      returning: true,
    });
    return records[0];
  }

  async delete(id: string): Promise<void> {
    await this.teacherDiscipline.destroy({ where: { id } });
  }
}
