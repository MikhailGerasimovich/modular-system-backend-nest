import { Injectable } from '@nestjs/common';
import { IBaseService } from 'src/common/interfaces/base-service.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { DisciplineAcademicPlan } from '../domain/entity/discipline-academic-plan.entity';
import { DisciplineAcademicPlanRepository } from '../infrastructure/discipline-academic-plan.repository';
import { CreateDisciplineAcademicPlanDto } from '../domain/dto/create-discipline-academic-plan.dto';
import { IReadAllDisciplineAcademicPlanOptions } from '../domain/interfaces/read-all-discipline-academic-plan.options';
import { UpdateDisciplineAcademicPlanDto } from '../domain/dto/update-discipline-academic-plan.dto';

@Injectable()
export class DisciplineAcademicPlanService implements IBaseService<DisciplineAcademicPlan> {
  constructor(private readonly disciplineAcademicPlanRepository: DisciplineAcademicPlanRepository) {}

  async create(createDisciplineAcademicPlanDto: CreateDisciplineAcademicPlanDto): Promise<DisciplineAcademicPlan> {
    const disciplineAcademicPlan = await this.disciplineAcademicPlanRepository.create(createDisciplineAcademicPlanDto);
    return disciplineAcademicPlan;
  }

  async readAll(readAllOptions: IReadAllDisciplineAcademicPlanOptions): Promise<ReadAllResult<DisciplineAcademicPlan>> {
    const disciplineAcademicPlans = await this.disciplineAcademicPlanRepository.readAll(readAllOptions);
    return disciplineAcademicPlans;
  }

  async readById(id: string): Promise<DisciplineAcademicPlan> {
    const disciplineAcademicPlan = await this.disciplineAcademicPlanRepository.readById(id);
    return disciplineAcademicPlan;
  }

  async update(id: string, updateDisciplineAcademicPlanDto: UpdateDisciplineAcademicPlanDto): Promise<DisciplineAcademicPlan> {
    const disciplineAcademicPlan = await this.disciplineAcademicPlanRepository.update(id, updateDisciplineAcademicPlanDto);
    return disciplineAcademicPlan;
  }

  async delete(id: string): Promise<void> {
    await this.disciplineAcademicPlanRepository.delete(id);
  }
}
