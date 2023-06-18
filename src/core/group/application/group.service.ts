import { Injectable } from '@nestjs/common';
import { IBaseService } from 'src/common/interfaces/base-service.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { Group } from '../domain/entity/group.entity';
import { GroupRepository } from '../infrastructure/group.repository';
import { CreateGroupDto } from '../domain/dto/create-group.dto';
import { IReadAllGroupOptions } from '../domain/interfaces/read-all-group.options';
import { UpdateGroupDto } from '../domain/dto/update-group.dto';

@Injectable()
export class GroupService implements IBaseService<Group> {
  constructor(private readonly groupRepository: GroupRepository) {}

  async create(createGroupDto: CreateGroupDto): Promise<Group> {
    const group = await this.groupRepository.create(createGroupDto);
    return group;
  }

  async readAll(readAllOptions: IReadAllGroupOptions): Promise<ReadAllResult<Group>> {
    const groups = await this.groupRepository.readAll(readAllOptions);
    return groups;
  }

  async readById(id: string): Promise<Group> {
    const group = await this.groupRepository.readById(id);
    return group;
  }

  async update(id: string, updateGroupDto: UpdateGroupDto): Promise<Group> {
    const group = await this.groupRepository.update(id, updateGroupDto);
    return group;
  }

  async delete(id: string): Promise<void> {
    await this.groupRepository.delete(id);
  }
}
