import { Injectable } from '@nestjs/common';
import { IBaseService } from 'src/common/interfaces/base-service.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { TeacherDiscipline } from '../domain/entity/teacher-discipline.entity';
import { TeacherDisciplineRepository } from '../infrastructure/teacher-discipline.repository';
import { CreateTeacherDisciplineDto } from '../domain/dto/create-teacher-discipline.dto';
import { IReadAllTeacherDisciplineOptions } from '../domain/interfaces/read-all-teacher-discipline.options';
import { UpdateTeacherDisciplineDto } from '../domain/dto/update-teacher-discipline.dto';

@Injectable()
export class TeacherDisciplineService implements IBaseService<TeacherDiscipline> {
  constructor(private readonly teacherDisciplineRepository: TeacherDisciplineRepository) {}

  async create(createTeacherDisciplineDto: CreateTeacherDisciplineDto): Promise<TeacherDiscipline> {
    const teacherDiscipline = await this.teacherDisciplineRepository.create(createTeacherDisciplineDto);
    return teacherDiscipline;
  }

  async readAll(readAllOptions: IReadAllTeacherDisciplineOptions): Promise<ReadAllResult<TeacherDiscipline>> {
    const teacherDisciplines = await this.teacherDisciplineRepository.readAll(readAllOptions);
    return teacherDisciplines;
  }

  async readById(id: string): Promise<TeacherDiscipline> {
    const teacherDiscipline = await this.teacherDisciplineRepository.readById(id);
    return teacherDiscipline;
  }

  async update(id: string, updateTeacherDisciplineDto: UpdateTeacherDisciplineDto): Promise<TeacherDiscipline> {
    const teacherDiscipline = await this.teacherDisciplineRepository.update(id, updateTeacherDisciplineDto);
    return teacherDiscipline;
  }

  async delete(id: string): Promise<void> {
    await this.teacherDisciplineRepository.delete(id);
  }
}
