import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IBaseRepository } from 'src/common/interfaces/base-repository.interfase';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { defaultPagination } from 'src/common/constants/read-all/pagination-default';
import { defaultSorting } from 'src/common/constants/read-all/sorting-default';
import { Department } from '../domain/entity/department.entity';
import { CreateDepartmentDto } from '../domain/dto/create-department.dto';
import { IReadAllDepartmentOptions } from '../domain/interfaces/read-all-department.options';
import { DepartmentFiltration } from '../domain/filter/department.filter';
import { UpdateDepartmentDto } from '../domain/dto/update-department.dto';

@Injectable()
export class DepartmentRepository implements IBaseRepository<Department> {
  constructor(@InjectModel(Department) private readonly department: typeof Department) {}

  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    return await this.department.create(createDepartmentDto);
  }

  async readAll(readAllOptions: IReadAllDepartmentOptions): Promise<ReadAllResult<Department>> {
    const pagination = readAllOptions.pagination ?? defaultPagination;
    const sorting = readAllOptions.sorting ?? defaultSorting;
    const filters = DepartmentFiltration.getLikeFilter(readAllOptions.filters);

    const { count, rows } = await this.department.findAndCountAll({
      where: { ...filters.department },
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

  async readById(id: string): Promise<Department> {
    return await this.department.findByPk(id);
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<Department> {
    const [rows, records] = await this.department.update(updateDepartmentDto, {
      where: { id },
      returning: true,
    });
    return records[0];
  }

  async delete(id: string): Promise<void> {
    await this.department.destroy({ where: { id } });
  }
}
