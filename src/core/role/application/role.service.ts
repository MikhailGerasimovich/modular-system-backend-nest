import { Injectable } from '@nestjs/common';
import { IBaseService } from 'src/common/interfaces/base-service.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { Role } from '../domain/entity/role.entity';
import { RoleRepository } from '../infrastructure/role.repository';
import { CreateRoleDto } from '../domain/dto/create-role.dto';
import { IReadAllRoleOptions } from '../domain/interfaces/read-all-role.options';
import { UpdateRoleDto } from '../domain/dto/update-role.dto';

@Injectable()
export class RoleService implements IBaseService<Role> {
  constructor(private readonly roleRepository: RoleRepository) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = await this.roleRepository.create(createRoleDto);
    return role;
  }

  async readAll(readAllOptions: IReadAllRoleOptions): Promise<ReadAllResult<Role>> {
    const roles = await this.roleRepository.readAll(readAllOptions);
    return roles;
  }

  async readById(id: string): Promise<Role> {
    const role = await this.roleRepository.readById(id);
    return role;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const role = await this.roleRepository.update(id, updateRoleDto);
    return role;
  }

  async delete(id: string): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
