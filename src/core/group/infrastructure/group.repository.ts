import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IBaseRepository } from 'src/common/interfaces/base-repository.interfase';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { defaultPagination } from 'src/common/constants/read-all/pagination-default';
import { defaultSorting } from 'src/common/constants/read-all/sorting-default';
import { Group } from '../domain/entity/group.entity';
import { CreateGroupDto } from '../domain/dto/create-group.dto';
import { IReadAllGroupOptions } from '../domain/interfaces/read-all-group.options';
import { GroupFiltration } from '../domain/filter/group.filter';
import { UpdateGroupDto } from '../domain/dto/update-group.dto';

@Injectable()
export class GroupRepository implements IBaseRepository<Group> {
  constructor(@InjectModel(Group) private readonly group: typeof Group) {}

  async create(createGroupDto: CreateGroupDto): Promise<Group> {
    return await this.group.create(createGroupDto);
  }

  async readAll(readAllOptions: IReadAllGroupOptions): Promise<ReadAllResult<Group>> {
    const pagination = readAllOptions.pagination ?? defaultPagination;
    const sorting = readAllOptions.sorting ?? defaultSorting;
    const filters = GroupFiltration.getLikeFilter(readAllOptions.filters);

    const { count, rows } = await this.group.findAndCountAll({
      where: { ...filters.group },
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

  async readById(id: string): Promise<Group> {
    return await this.group.findByPk(id);
  }

  async update(id: string, updateGroupDto: UpdateGroupDto): Promise<Group> {
    const [rows, records] = await this.group.update(updateGroupDto, {
      where: { id },
      returning: true,
    });
    return records[0];
  }

  async delete(id: string): Promise<void> {
    await this.group.destroy({ where: { id } });
  }
}
