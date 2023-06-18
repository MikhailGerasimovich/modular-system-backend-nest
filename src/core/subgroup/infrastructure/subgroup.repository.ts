import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IBaseRepository } from 'src/common/interfaces/base-repository.interfase';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { defaultPagination } from 'src/common/constants/read-all/pagination-default';
import { defaultSorting } from 'src/common/constants/read-all/sorting-default';
import { Subgroup } from '../domain/entity/subgroup.entity';
import { CreateSubgroupDto } from '../domain/dto/create-subgtoup.dto';
import { IReadAllSubgroupOptions } from '../domain/interfaces/read-all-subgroup.options';
import { SubgroupFiltration } from '../domain/filter/subgroup.filter';
import { UpdateSubgroupDto } from '../domain/dto/update-subgroup.dto';

@Injectable()
export class SubgroupRepository implements IBaseRepository<Subgroup> {
  constructor(@InjectModel(Subgroup) private readonly subgroup: typeof Subgroup) {}

  async create(createSubgroupDto: CreateSubgroupDto): Promise<Subgroup> {
    return await this.subgroup.create(createSubgroupDto);
  }

  async readAll(readAllOptions: IReadAllSubgroupOptions): Promise<ReadAllResult<Subgroup>> {
    const pagination = readAllOptions.pagination ?? defaultPagination;
    const sorting = readAllOptions.sorting ?? defaultSorting;
    const filters = SubgroupFiltration.getLikeFilter(readAllOptions.filters);

    const { count, rows } = await this.subgroup.findAndCountAll({
      where: { ...filters.subgroup },
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

  async readById(id: string): Promise<Subgroup> {
    return await this.subgroup.findByPk(id);
  }

  async update(id: string, updateSubgroupDto: UpdateSubgroupDto): Promise<Subgroup> {
    const [rows, records] = await this.subgroup.update(updateSubgroupDto, {
      where: { id },
      returning: true,
    });
    return records[0];
  }

  async delete(id: string): Promise<void> {
    await this.subgroup.destroy({ where: { id } });
  }
}
