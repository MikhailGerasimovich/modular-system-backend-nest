import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { IBaseController } from 'src/common/interfaces/base-controller.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { FrontendGroup } from '../domain/types/group.frontend';
import { GroupService } from '../application/group.service';
import { CreateGroupDto } from '../domain/dto/create-group.dto';
import { ReadAllGroupDto } from '../domain/dto/read-all-group.dto';
import { UpdateGroupDto } from '../domain/dto/update-group.dto';

@Controller('group')
export class GroupController implements IBaseController<FrontendGroup> {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createGroupDto: CreateGroupDto): Promise<FrontendGroup> {
    const group = await this.groupService.create(createGroupDto);
    return new FrontendGroup(group);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async readAll(@Query() readAllOptions: ReadAllGroupDto): Promise<ReadAllResult<FrontendGroup>> {
    const { pagination, sorting, ...filters } = readAllOptions;
    const groups = await this.groupService.readAll({ pagination, sorting, filters });
    return {
      totalRecordsNumber: groups.totalRecordsNumber,
      records: groups.records.map((record) => new FrontendGroup(record)),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async readById(@Param('id') id: string): Promise<FrontendGroup> {
    const group = await this.groupService.readById(id);
    return new FrontendGroup(group);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto): Promise<FrontendGroup> {
    const group = await this.groupService.update(id, updateGroupDto);
    return new FrontendGroup(group);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.groupService.delete(id);
  }
}
