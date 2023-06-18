import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IBaseRepository } from 'src/common/interfaces/base-repository.interfase';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { defaultSorting } from 'src/common/constants/read-all/sorting-default';
import { Role } from '../domain/entity/role.entity';
import { CreateRoleDto } from '../domain/dto/create-role.dto';
import { IReadAllRoleOptions } from '../domain/interfaces/read-all-role.options';
import { defaultPagination } from 'src/common/constants/read-all/pagination-default';
import { RoleFiltration } from '../domain/filter/role.filter';
import { UpdateRoleDto } from '../domain/dto/update-role.dto';

@Injectable()
export class RoleRepository implements IBaseRepository<Role> {
  constructor(@InjectModel(Role) private readonly role: typeof Role) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    return await this.role.create(createRoleDto);
  }

  async readAll(readAllOptions: IReadAllRoleOptions): Promise<ReadAllResult<Role>> {
    const pagination = readAllOptions.pagination ?? defaultPagination;
    const sorting = readAllOptions.sorting ?? defaultSorting;
    const filters = RoleFiltration.getLikeFilter(readAllOptions.filters);

    const { count, rows } = await this.role.findAndCountAll({
      where: { ...filters.role },
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

  async readById(id: string): Promise<Role> {
    return await this.role.findByPk(id);
  }

  async update(id: string, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const [rows, records] = await this.role.update(updateRoleDto, {
      where: { id },
      returning: true,
    });
    return records[0];
  }

  async delete(id: string): Promise<void> {
    await this.role.destroy({ where: { id } });
  }
}
