import { Injectable } from '@nestjs/common';
import { IBaseService } from 'src/common/interfaces/base-service.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { Teacher } from '../domain/entity/teacher.entity';
import { TeacherRepository } from '../infrastructure/teacher.repository';
import { CreateTeacherDto } from '../domain/dto/create-teacher.dto';
import { IReadAllTeacherOptions } from '../domain/interfaces/read-all-teacher.options';
import { UpdateTeacherDto } from '../domain/dto/update-teacher.dto';

@Injectable()
export class TeacherService implements IBaseService<Teacher> {
  constructor(private readonly teacherRepository: TeacherRepository) {}

  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const teacher = await this.teacherRepository.create(createTeacherDto);
    return teacher;
  }

  async readAll(readAllOptions: IReadAllTeacherOptions): Promise<ReadAllResult<Teacher>> {
    const teachers = await this.teacherRepository.readAll(readAllOptions);
    return teachers;
  }

  async readById(id: string): Promise<Teacher> {
    const teacher = await this.teacherRepository.readById(id);
    return teacher;
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto): Promise<Teacher> {
    const teacher = await this.teacherRepository.update(id, updateTeacherDto);
    return teacher;
  }

  async delete(id: string): Promise<void> {
    await this.teacherRepository.delete(id);
  }
}
