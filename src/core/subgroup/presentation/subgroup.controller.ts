import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { IBaseController } from 'src/common/interfaces/base-controller.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { FrontendSubgroup } from '../domain/types/subgroup.frontend';
import { SubgroupService } from '../application/subgroup.service';
import { CreateSubgroupDto } from '../domain/dto/create-subgtoup.dto';
import { ReadAllSubgroupDto } from '../domain/dto/read-all-subgroup.dto';
import { UpdateSubgroupDto } from '../domain/dto/update-subgroup.dto';

@Controller('subgroup')
export class SubgroupController implements IBaseController<FrontendSubgroup> {
  constructor(private readonly subgroupService: SubgroupService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createSubgroupDto: CreateSubgroupDto): Promise<FrontendSubgroup> {
    const subgroup = await this.subgroupService.create(createSubgroupDto);
    return new FrontendSubgroup(subgroup);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async readAll(@Query() readAllOptions: ReadAllSubgroupDto): Promise<ReadAllResult<FrontendSubgroup>> {
    const { pagination, sorting, ...filters } = readAllOptions;
    const subgroups = await this.subgroupService.readAll({ pagination, sorting, filters });
    return {
      totalRecordsNumber: subgroups.totalRecordsNumber,
      records: subgroups.records.map((record) => new FrontendSubgroup(record)),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async readById(@Param('id') id: string): Promise<FrontendSubgroup> {
    const subgroup = await this.subgroupService.readById(id);
    return new FrontendSubgroup(subgroup);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateSubgroupDto: UpdateSubgroupDto): Promise<FrontendSubgroup> {
    const subgroup = await this.subgroupService.update(id, updateSubgroupDto);
    return new FrontendSubgroup(subgroup);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.subgroupService.delete(id);
  }
}
