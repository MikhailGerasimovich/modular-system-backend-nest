import { Injectable } from '@nestjs/common';
import { IBaseRepository } from 'src/common/interfaces/base-repository.interfase';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { Discipline } from '../domain/entity/discipline.entity';
import { CreateDisciplineDto } from '../domain/dto/create-discipline.dto';
import { InjectModel } from '@nestjs/sequelize';
import { IReadAllDisciplineOptions } from '../domain/interfaces/read-all-discipline.options';
import { defaultPagination } from 'src/common/constants/read-all/pagination-default';
import { defaultSorting } from 'src/common/constants/read-all/sorting-default';
import { DisciplineFiltration } from '../domain/filter/discipline.filter';
import { UpdateDisciplineDto } from '../domain/dto/update-discipline.dto';

@Injectable()
export class DisciplineRepository implements IBaseRepository<Discipline> {
  constructor(@InjectModel(Discipline) private readonly discipline: typeof Discipline) {}

  async create(createDisciplineDto: CreateDisciplineDto): Promise<Discipline> {
    return await this.discipline.create(createDisciplineDto);
  }

  async readAll(readAllOptions: IReadAllDisciplineOptions): Promise<ReadAllResult<Discipline>> {
    const pagination = readAllOptions.pagination ?? defaultPagination;
    const sorting = readAllOptions.sorting ?? defaultSorting;
    const filters = DisciplineFiltration.getLikeFilter(readAllOptions.filters);

    const { count, rows } = await this.discipline.findAndCountAll({
      where: { ...filters.discipline },
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

  async readById(id: string): Promise<Discipline> {
    return await this.discipline.findByPk(id);
  }

  async update(id: string, updateDisciplineDto: UpdateDisciplineDto): Promise<Discipline> {
    const [rows, records] = await this.discipline.update(updateDisciplineDto, {
      where: { id },
      returning: true,
    });
    return records[0];
  }

  async delete(id: string): Promise<void> {
    await this.discipline.destroy({ where: { id } });
  }
}
