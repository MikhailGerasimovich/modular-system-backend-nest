import { Injectable } from '@nestjs/common';
import { IBaseService } from 'src/common/interfaces/base-service.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { Subgroup } from '../domain/entity/subgroup.entity';
import { SubgroupRepository } from '../infrastructure/subgroup.repository';
import { CreateSubgroupDto } from '../domain/dto/create-subgtoup.dto';
import { IReadAllSubgroupOptions } from '../domain/interfaces/read-all-subgroup.options';
import { UpdateSubgroupDto } from '../domain/dto/update-subgroup.dto';

@Injectable()
export class SubgroupService implements IBaseService<Subgroup> {
  constructor(private readonly subgroupRepository: SubgroupRepository) {}

  async create(createSubgroupDto: CreateSubgroupDto): Promise<Subgroup> {
    const subgroup = await this.subgroupRepository.create(createSubgroupDto);
    return subgroup;
  }

  async readAll(readAllOptions: IReadAllSubgroupOptions): Promise<ReadAllResult<Subgroup>> {
    const subgroups = await this.subgroupRepository.readAll(readAllOptions);
    return subgroups;
  }

  async readById(id: string): Promise<Subgroup> {
    const subgroup = await this.subgroupRepository.readById(id);
    return subgroup;
  }

  async update(id: string, updateSubgroupDto: UpdateSubgroupDto): Promise<Subgroup> {
    const subgroup = await this.subgroupRepository.update(id, updateSubgroupDto);
    return subgroup;
  }

  async delete(id: string): Promise<void> {
    await this.subgroupRepository.delete(id);
  }
}
