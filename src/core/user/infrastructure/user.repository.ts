import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IBaseRepository } from 'src/common/interfaces/base-repository.interfase';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { defaultSorting } from 'src/common/constants/read-all/sorting-default';
import { User } from '../domain/entity/user.entity';
import { CreateUserDto } from '../domain/dto/create-user.dto';
import { IReadAllUserOptions } from '../domain/interfaces/read-all-user.options';
import { defaultPagination } from 'src/common/constants/read-all/pagination-default';
import { UserFiltration } from '../domain/filter/user.filter';
import { UpdateUserDto } from '../domain/dto/update-user.dto';

@Injectable()
export class UserRepository implements IBaseRepository<User> {
  constructor(@InjectModel(User) private readonly user: typeof User) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.user.create(createUserDto);
  }

  async readAll(readAllOptions: IReadAllUserOptions): Promise<ReadAllResult<User>> {
    const pagination = readAllOptions.pagination ?? defaultPagination;
    const sorting = readAllOptions.sorting ?? defaultSorting;
    const filters = UserFiltration.getLikeFilter(readAllOptions.filters);

    const { count, rows } = await this.user.findAndCountAll({
      where: { ...filters.user },
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

  async readById(id: string): Promise<User> {
    return await this.user.findByPk(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const [rows, records] = await this.user.update(updateUserDto, {
      where: { id },
      returning: true,
    });
    return records[0];
  }

  async delete(id: string): Promise<void> {
    await this.user.destroy({ where: { id } });
  }
}
