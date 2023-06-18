import { Injectable } from '@nestjs/common';
import { IBaseService } from 'src/common/interfaces/base-service.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { Grade } from '../domain/entity/grade.entity';
import { GradeRepository } from '../infrastructure/grade.repository';
import { CreateGradeDto } from '../domain/dto/create-grade.dto';
import { IReadAllGradeOptions } from '../domain/interfaces/read-all-grade.options';
import { UpdateGradeDto } from '../domain/dto/update-grade.dto';

@Injectable()
export class GradeService implements IBaseService<Grade> {
  constructor(private readonly gradeRepository: GradeRepository) {}

  async create(createGradeDto: CreateGradeDto): Promise<Grade> {
    const grade = await this.gradeRepository.create(createGradeDto);
    return grade;
  }

  async readAll(readAllOptions: IReadAllGradeOptions): Promise<ReadAllResult<Grade>> {
    const grades = await this.gradeRepository.readAll(readAllOptions);
    return grades;
  }

  async readById(id: string): Promise<Grade> {
    const grade = await this.gradeRepository.readById(id);
    return grade;
  }

  async update(id: string, updateGradeDto: UpdateGradeDto): Promise<Grade> {
    const grade = await this.gradeRepository.update(id, updateGradeDto);
    return grade;
  }

  async delete(id: string): Promise<void> {
    await this.gradeRepository.delete(id);
  }
}
