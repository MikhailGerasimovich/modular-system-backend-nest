import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IBaseRepository } from 'src/common/interfaces/base-repository.interfase';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { defaultPagination } from 'src/common/constants/read-all/pagination-default';
import { defaultSorting } from 'src/common/constants/read-all/sorting-default';
import { AcademicPlan } from '../domain/entity/academic-plan.entity';
import { CreateAcademicPlanDto } from '../domain/dto/create-academic-plan.dto';
import { IReadAllAcademicPlanOptions } from '../domain/interfaces/read-all-academic-plan.options';
import { AcademicPlanFiltration } from '../domain/filter/academic-plan.filter';
import { UpdateAcademicPlanDto } from '../domain/dto/update-academic-plan.dto';

@Injectable()
export class AcademicPlanRepository implements IBaseRepository<AcademicPlan> {
  constructor(@InjectModel(AcademicPlan) private readonly academicPlan: typeof AcademicPlan) {}

  async create(createAcademicPlanDto: CreateAcademicPlanDto): Promise<AcademicPlan> {
    return await this.academicPlan.create(createAcademicPlanDto);
  }

  async readAll(readAllOptions: IReadAllAcademicPlanOptions): Promise<ReadAllResult<AcademicPlan>> {
    const pagination = readAllOptions.pagination ?? defaultPagination;
    const sorting = readAllOptions.sorting ?? defaultSorting;
    const filters = AcademicPlanFiltration.getLikeFilter(readAllOptions.filters);

    const { count, rows } = await this.academicPlan.findAndCountAll({
      where: { ...filters.academicPlan },
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

  async readById(id: string): Promise<AcademicPlan> {
    return await this.academicPlan.findByPk(id);
  }

  async update(id: string, updateAcademicPlanDto: UpdateAcademicPlanDto): Promise<AcademicPlan> {
    const [rows, records] = await this.academicPlan.update(updateAcademicPlanDto, {
      where: { id },
      returning: true,
    });
    return records[0];
  }

  async delete(id: string): Promise<void> {
    await this.academicPlan.destroy({ where: { id } });
  }
}
