import { Injectable } from '@nestjs/common';
import { IBaseService } from 'src/common/interfaces/base-service.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { Discipline } from '../domain/entity/discipline.entity';
import { DisciplineRepository } from '../infrastructure/discipline.repository';
import { CreateDisciplineDto } from '../domain/dto/create-discipline.dto';
import { IReadAllDisciplineOptions } from '../domain/interfaces/read-all-discipline.options';
import { UpdateDisciplineDto } from '../domain/dto/update-discipline.dto';

@Injectable()
export class DisciplineService implements IBaseService<Discipline> {
  constructor(private readonly disciplineRepository: DisciplineRepository) {}

  async create(createDisciplineDto: CreateDisciplineDto): Promise<Discipline> {
    const discipline = await this.disciplineRepository.create(createDisciplineDto);
    return discipline;
  }

  async readAll(readAllOptions: IReadAllDisciplineOptions): Promise<ReadAllResult<Discipline>> {
    const disciplines = await this.disciplineRepository.readAll(readAllOptions);
    return disciplines;
  }

  async readById(id: string): Promise<Discipline> {
    const discipline = await this.disciplineRepository.readById(id);
    return discipline;
  }

  async update(id: string, updateDisciplineDto: UpdateDisciplineDto): Promise<Discipline> {
    const discipline = await this.disciplineRepository.update(id, updateDisciplineDto);
    return discipline;
  }

  async delete(id: string): Promise<void> {
    await this.disciplineRepository.delete(id);
  }
}
