import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IBaseRepository } from 'src/common/interfaces/base-repository.interfase';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { defaultPagination } from 'src/common/constants/read-all/pagination-default';
import { defaultSorting } from 'src/common/constants/read-all/sorting-default';
import { AcademicModule } from '../domain/entity/academic-module.entity';
import { CreateAcademicModuleDto } from '../domain/dto/create-academic-module.dto';
import { IReadAllAcademicModuleOptions } from '../domain/interfaces/read-all-academic-module.options';
import { AcademicModuleFiltration } from '../domain/filter/academic-module.filter';
import { UpdateAcademicModuleDto } from '../domain/dto/update-academic-module.dto';

@Injectable()
export class AcademicModuleRepository implements IBaseRepository<AcademicModule> {
  constructor(@InjectModel(AcademicModule) private readonly academicModule: typeof AcademicModule) {}

  async create(createAcademicModuleDto: CreateAcademicModuleDto): Promise<AcademicModule> {
    return await this.academicModule.create(createAcademicModuleDto);
  }

  async readAll(readAllOptions: IReadAllAcademicModuleOptions): Promise<ReadAllResult<AcademicModule>> {
    const pagination = readAllOptions.pagination ?? defaultPagination;
    const sorting = readAllOptions.sorting ?? defaultSorting;
    const filters = AcademicModuleFiltration.getLikeFilter(readAllOptions.filters);

    const { count, rows } = await this.academicModule.findAndCountAll({
      where: { ...filters.academicModule },
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

  async readById(id: string): Promise<AcademicModule> {
    return await this.academicModule.findByPk(id);
  }

  async update(id: string, updateAcademicModuleDto: UpdateAcademicModuleDto): Promise<AcademicModule> {
    const [rows, records] = await this.academicModule.update(updateAcademicModuleDto, {
      where: { id },
      returning: true,
    });
    return records[0];
  }

  async delete(id: string): Promise<void> {
    await this.academicModule.destroy({ where: { id } });
  }
}
