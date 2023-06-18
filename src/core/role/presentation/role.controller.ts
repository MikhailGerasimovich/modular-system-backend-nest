import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { FrontendRole } from '../domain/types/role.frontend';
import { IBaseController } from 'src/common/interfaces/base-controller.interface';
import { RoleService } from '../application/role.service';
import { CreateRoleDto } from '../domain/dto/create-role.dto';
import { ReadAllRoleDto } from '../domain/dto/read-all-role.dto';
import { UpdateRoleDto } from '../domain/dto/update-role.dto';

@Controller('role')
export class RoleController implements IBaseController<FrontendRole> {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createRoleDto: CreateRoleDto): Promise<FrontendRole> {
    const role = await this.roleService.create(createRoleDto);
    return new FrontendRole(role);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async readAll(@Query() readAllOptions: ReadAllRoleDto): Promise<ReadAllResult<FrontendRole>> {
    const { pagination, sorting, ...filters } = readAllOptions;
    const roles = await this.roleService.readAll({ pagination, sorting, filters });
    return {
      totalRecordsNumber: roles.totalRecordsNumber,
      records: roles.records.map((record) => new FrontendRole(record)),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async readById(@Param('id') id: string): Promise<FrontendRole> {
    const role = await this.roleService.readById(id);
    return new FrontendRole(role);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto): Promise<FrontendRole> {
    const role = await this.roleService.update(id, updateRoleDto);
    return new FrontendRole(role);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.roleService.delete(id);
  }
}
