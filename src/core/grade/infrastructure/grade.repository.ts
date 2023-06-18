import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IBaseRepository } from 'src/common/interfaces/base-repository.interfase';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { defaultSorting } from 'src/common/constants/read-all/sorting-default';
import { CreateGradeDto } from '../domain/dto/create-grade.dto';
import { Grade } from '../domain/entity/grade.entity';
import { IReadAllGradeOptions } from '../domain/interfaces/read-all-grade.options';
import { defaultPagination } from 'src/common/constants/read-all/pagination-default';
import { GradeFiltration } from '../domain/filter/grade.filter';
import { UpdateGradeDto } from '../domain/dto/update-grade.dto';

@Injectable()
export class GradeRepository implements IBaseRepository<Grade> {
  constructor(@InjectModel(Grade) private readonly grade: typeof Grade) {}

  async create(createGradeDto: CreateGradeDto): Promise<Grade> {
    return await this.grade.create(createGradeDto);
  }

  async readAll(readAllOptions: IReadAllGradeOptions): Promise<ReadAllResult<Grade>> {
    const pagination = readAllOptions.pagination ?? defaultPagination;
    const sorting = readAllOptions.sorting ?? defaultSorting;
    const filters = GradeFiltration.getLikeFilter(readAllOptions.filters);

    const { count, rows } = await this.grade.findAndCountAll({
      where: { ...filters.grade },
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

  async readById(id: string): Promise<Grade> {
    return await this.grade.findByPk(id);
  }

  async update(id: string, updateGradeDto: UpdateGradeDto): Promise<Grade> {
    const [rows, records] = await this.grade.update(updateGradeDto, {
      where: { id },
      returning: true,
    });
    return records[0];
  }

  async delete(id: string): Promise<void> {
    await this.grade.destroy({ where: { id } });
  }
}
