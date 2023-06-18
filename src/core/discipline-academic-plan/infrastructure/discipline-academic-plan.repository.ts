import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IBaseRepository } from 'src/common/interfaces/base-repository.interfase';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { defaultSorting } from 'src/common/constants/read-all/sorting-default';
import { DisciplineAcademicPlan } from '../domain/entity/discipline-academic-plan.entity';
import { CreateDisciplineAcademicPlanDto } from '../domain/dto/create-discipline-academic-plan.dto';
import { IReadAllDisciplineAcademicPlanOptions } from '../domain/interfaces/read-all-discipline-academic-plan.options';
import { defaultPagination } from 'src/common/constants/read-all/pagination-default';
import { DisciplineAcademicPlanFiltration } from '../domain/filter/discipline-academic-plan.filter';
import { UpdateDisciplineAcademicPlanDto } from '../domain/dto/update-discipline-academic-plan.dto';

@Injectable()
export class DisciplineAcademicPlanRepository implements IBaseRepository<DisciplineAcademicPlan> {
  constructor(@InjectModel(DisciplineAcademicPlan) private readonly disciplineAcademicPlan: typeof DisciplineAcademicPlan) {}

  async create(createDisciplineAcademicPlanDto: CreateDisciplineAcademicPlanDto): Promise<DisciplineAcademicPlan> {
    return await this.disciplineAcademicPlan.create(createDisciplineAcademicPlanDto);
  }

  async readAll(readAllOptions: IReadAllDisciplineAcademicPlanOptions): Promise<ReadAllResult<DisciplineAcademicPlan>> {
    const pagination = readAllOptions.pagination ?? defaultPagination;
    const sorting = readAllOptions.sorting ?? defaultSorting;
    const filters = DisciplineAcademicPlanFiltration.getLikeFilter(readAllOptions.filters);

    const { count, rows } = await this.disciplineAcademicPlan.findAndCountAll({
      where: { ...filters.disciplineAcademicPlan },
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

  async readById(id: string): Promise<DisciplineAcademicPlan> {
    return await this.disciplineAcademicPlan.findByPk(id);
  }

  async update(id: string, updateDisciplineAcademicPlanDto: UpdateDisciplineAcademicPlanDto): Promise<DisciplineAcademicPlan> {
    const [rows, records] = await this.disciplineAcademicPlan.update(updateDisciplineAcademicPlanDto, {
      where: { id },
      returning: true,
    });
    return records[0];
  }

  async delete(id: string): Promise<void> {
    await this.disciplineAcademicPlan.destroy({ where: { id } });
  }
}
