import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Speciality } from '../domain/entity/speciality.entity';
import { CreateSpecialityDto } from '../domain/dto/create-speciality.dto';
import { IBaseRepository } from 'src/common/interfaces/base-repository.interfase';
import { UpdateSpecialityDto } from '../domain/dto/update-speciality.dto';
import { IReadAllSpecialityOptions } from '../domain/interfaces/read-all-speciality.options';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { SpecialityFiltration } from '../domain/filter/speciality.filter';
import { defaultPagination } from 'src/common/constants/read-all/pagination-default';
import { defaultSorting } from 'src/common/constants/read-all/sorting-default';

@Injectable()
export class SpecialityRepository implements IBaseRepository<Speciality> {
  constructor(@InjectModel(Speciality) private readonly speciality: typeof Speciality) {}

  async create(createSpecialityDto: CreateSpecialityDto): Promise<Speciality> {
    return await this.speciality.create(createSpecialityDto);
  }

  async readAll(readAllOptions: IReadAllSpecialityOptions): Promise<ReadAllResult<Speciality>> {
    const pagination = readAllOptions.pagination ?? defaultPagination;
    const sorting = readAllOptions.sorting ?? defaultSorting;
    const filters = SpecialityFiltration.getLikeFilter(readAllOptions.filters);

    const { count, rows } = await this.speciality.findAndCountAll({
      where: { ...filters.speciality },
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

  async readById(id: string): Promise<Speciality> {
    return await this.speciality.findByPk(id);
  }

  async update(id: string, updateSpecialityDto: UpdateSpecialityDto): Promise<Speciality> {
    const [rows, records] = await this.speciality.update(updateSpecialityDto, {
      where: { id },
      returning: true,
    });
    return records[0];
  }

  async delete(id: string): Promise<void> {
    await this.speciality.destroy({ where: { id } });
  }
}
