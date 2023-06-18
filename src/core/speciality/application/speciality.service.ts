import { Injectable } from '@nestjs/common';
import { SpecialityRepository } from '../infrastructure/speciality.repository';
import { CreateSpecialityDto } from '../domain/dto/create-speciality.dto';
import { IBaseService } from 'src/common/interfaces/base-service.interface';
import { Speciality } from '../domain/entity/speciality.entity';
import { UpdateSpecialityDto } from '../domain/dto/update-speciality.dto';
import { IReadAllSpecialityOptions } from '../domain/interfaces/read-all-speciality.options';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';

@Injectable()
export class SpecialityService implements IBaseService<Speciality> {
  constructor(private readonly specialityRepository: SpecialityRepository) {}

  async create(createSpecialityDto: CreateSpecialityDto): Promise<Speciality> {
    const speciality = await this.specialityRepository.create(createSpecialityDto);
    return speciality;
  }

  async readAll(readAllOptions: IReadAllSpecialityOptions): Promise<ReadAllResult<Speciality>> {
    const specialties = await this.specialityRepository.readAll(readAllOptions);
    return specialties;
  }

  async readById(id: string): Promise<Speciality> {
    const speciality = await this.specialityRepository.readById(id);
    return speciality;
  }

  async update(id: string, updateSpecialityDto: UpdateSpecialityDto): Promise<Speciality> {
    const speciality = await this.specialityRepository.update(id, updateSpecialityDto);
    return speciality;
  }

  async delete(id: string): Promise<void> {
    await this.specialityRepository.delete(id);
  }
}
