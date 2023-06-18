import { Injectable } from '@nestjs/common';
import { IBaseService } from 'src/common/interfaces/base-service.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { Student } from '../domain/entity/student.entity';
import { StudentRepository } from '../infrastructure/student.repository';
import { CreateStudentDto } from '../domain/dto/create-student.dto';
import { IReadAllStudentOptions } from '../domain/interfaces/read-all-student.options';
import { UpdateStudentDto } from '../domain/dto/update-student.dto';

@Injectable()
export class StudentService implements IBaseService<Student> {
  constructor(private readonly studentRepository: StudentRepository) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = await this.studentRepository.create(createStudentDto);
    return student;
  }

  async readAll(readAllOptions: IReadAllStudentOptions): Promise<ReadAllResult<Student>> {
    const students = await this.studentRepository.readAll(readAllOptions);
    return students;
  }

  async readById(id: string): Promise<Student> {
    const student = await this.studentRepository.readById(id);
    return student;
  }

  async update(id: string, updateStudentDto: UpdateStudentDto): Promise<Student> {
    const student = await this.studentRepository.update(id, updateStudentDto);
    return student;
  }

  async delete(id: string): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
