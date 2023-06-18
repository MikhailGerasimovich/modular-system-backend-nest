import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { IBaseController } from 'src/common/interfaces/base-controller.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { FrontendDepartment } from '../domain/types/department.frontend';
import { DepartmentService } from '../application/department.service';
import { CreateDepartmentDto } from '../domain/dto/create-department.dto';
import { ReadAllDepartmentDto } from '../domain/dto/read-all-department.dto';
import { UpdateDepartmentDto } from '../domain/dto/update-department.dto';

@Controller('department')
export class DepartmentController implements IBaseController<FrontendDepartment> {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDepartmentDto: CreateDepartmentDto): Promise<FrontendDepartment> {
    const department = await this.departmentService.create(createDepartmentDto);
    return new FrontendDepartment(department);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async readAll(@Query() readAllOptions: ReadAllDepartmentDto): Promise<ReadAllResult<FrontendDepartment>> {
    const { pagination, sorting, ...filters } = readAllOptions;
    const departments = await this.departmentService.readAll({ pagination, sorting, filters });
    return {
      totalRecordsNumber: departments.totalRecordsNumber,
      records: departments.records.map((record) => new FrontendDepartment(record)),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async readById(@Param('id') id: string): Promise<FrontendDepartment> {
    const department = await this.departmentService.readById(id);
    return new FrontendDepartment(department);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto): Promise<FrontendDepartment> {
    const department = await this.departmentService.update(id, updateDepartmentDto);
    return new FrontendDepartment(department);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.departmentService.delete(id);
  }
}
