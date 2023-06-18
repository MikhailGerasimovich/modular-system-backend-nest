import { Injectable } from '@nestjs/common';
import { IBaseService } from 'src/common/interfaces/base-service.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { AcademicModule } from '../domain/entity/academic-module.entity';
import { AcademicModuleRepository } from '../infrastructure/academic-module.repository';
import { CreateAcademicModuleDto } from '../domain/dto/create-academic-module.dto';
import { IReadAllAcademicModuleOptions } from '../domain/interfaces/read-all-academic-module.options';
import { UpdateAcademicModuleDto } from '../domain/dto/update-academic-module.dto';

@Injectable()
export class AcademicModuleService implements IBaseService<AcademicModule> {
  constructor(private readonly academicModuleRepository: AcademicModuleRepository) {}

  async create(createAcademicModuleDto: CreateAcademicModuleDto): Promise<AcademicModule> {
    const academicModule = await this.academicModuleRepository.create(createAcademicModuleDto);
    return academicModule;
  }

  async readAll(readAllOptions: IReadAllAcademicModuleOptions): Promise<ReadAllResult<AcademicModule>> {
    const academicModules = await this.academicModuleRepository.readAll(readAllOptions);
    return academicModules;
  }

  async readById(id: string): Promise<AcademicModule> {
    const academicModule = await this.academicModuleRepository.readById(id);
    return academicModule;
  }

  async update(id: string, updateAcademicModuleDto: UpdateAcademicModuleDto): Promise<AcademicModule> {
    const academicModule = await this.academicModuleRepository.update(id, updateAcademicModuleDto);
    return academicModule;
  }

  async delete(id: string): Promise<void> {
    await this.academicModuleRepository.delete(id);
  }
}
