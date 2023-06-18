import { Injectable } from '@nestjs/common';
import { IBaseService } from 'src/common/interfaces/base-service.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { DepartmentRepository } from '../infrastructure/department.repository';
import { Department } from '../domain/entity/department.entity';
import { CreateDepartmentDto } from '../domain/dto/create-department.dto';
import { IReadAllDepartmentOptions } from '../domain/interfaces/read-all-department.options';
import { UpdateDepartmentDto } from '../domain/dto/update-department.dto';

@Injectable()
export class DepartmentService implements IBaseService<Department> {
  constructor(private readonly departmentRepository: DepartmentRepository) {}

  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const department = await this.departmentRepository.create(createDepartmentDto);
    return department;
  }

  async readAll(readAllOptions: IReadAllDepartmentOptions): Promise<ReadAllResult<Department>> {
    const departments = await this.departmentRepository.readAll(readAllOptions);
    return departments;
  }

  async readById(id: string): Promise<Department> {
    const department = await this.departmentRepository.readById(id);
    return department;
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<Department> {
    const department = await this.departmentRepository.update(id, updateDepartmentDto);
    return department;
  }

  async delete(id: string): Promise<void> {
    await this.departmentRepository.delete(id);
  }
}
