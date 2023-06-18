import { Injectable } from '@nestjs/common';
import { IBaseService } from 'src/common/interfaces/base-service.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { AcademicPlan } from '../domain/entity/academic-plan.entity';
import { AcademicPlanRepository } from '../infrastructure/academic-plan.repository';
import { CreateAcademicPlanDto } from '../domain/dto/create-academic-plan.dto';
import { IReadAllAcademicPlanOptions } from '../domain/interfaces/read-all-academic-plan.options';
import { UpdateAcademicPlanDto } from '../domain/dto/update-academic-plan.dto';

@Injectable()
export class AcademicPlanService implements IBaseService<AcademicPlan> {
  constructor(private readonly academicPlanRepository: AcademicPlanRepository) {}

  async create(createAcademicPlanDto: CreateAcademicPlanDto): Promise<AcademicPlan> {
    const academicPlan = await this.academicPlanRepository.create(createAcademicPlanDto);
    return academicPlan;
  }

  async readAll(readAllOptions: IReadAllAcademicPlanOptions): Promise<ReadAllResult<AcademicPlan>> {
    const academicPlans = await this.academicPlanRepository.readAll(readAllOptions);
    return academicPlans;
  }

  async readById(id: string): Promise<AcademicPlan> {
    const academicPlan = await this.academicPlanRepository.readById(id);
    return academicPlan;
  }

  async update(id: string, updateAcademicPlanDto: UpdateAcademicPlanDto): Promise<AcademicPlan> {
    const academicPlan = await this.academicPlanRepository.update(id, updateAcademicPlanDto);
    return academicPlan;
  }

  async delete(id: string): Promise<void> {
    await this.academicPlanRepository.delete(id);
  }
}
