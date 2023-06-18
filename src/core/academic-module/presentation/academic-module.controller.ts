import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { IBaseController } from 'src/common/interfaces/base-controller.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { FrontendAcademicModule } from '../domain/types/academic-module.frontend';
import { AcademicModuleService } from '../application/academic-module.service';
import { CreateAcademicModuleDto } from '../domain/dto/create-academic-module.dto';
import { ReadAllAcademicModuleDto } from '../domain/dto/read-all-academic-module.dto';
import { UpdateAcademicModuleDto } from '../domain/dto/update-academic-module.dto';

@Controller('academic-module')
export class AcademicModuleController implements IBaseController<FrontendAcademicModule> {
  constructor(private readonly academicModuleService: AcademicModuleService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createAcademicModuleDto: CreateAcademicModuleDto): Promise<FrontendAcademicModule> {
    const academicModele = await this.academicModuleService.create(createAcademicModuleDto);
    return new FrontendAcademicModule(academicModele);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async readAll(@Query() readAllOptions: ReadAllAcademicModuleDto): Promise<ReadAllResult<FrontendAcademicModule>> {
    const { pagination, sorting, ...filters } = readAllOptions;
    const academicModules = await this.academicModuleService.readAll({ pagination, sorting, filters });
    return {
      totalRecordsNumber: academicModules.totalRecordsNumber,
      records: academicModules.records.map((record) => new FrontendAcademicModule(record)),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async readById(@Param('id') id: string): Promise<FrontendAcademicModule> {
    const academicModule = await this.academicModuleService.readById(id);
    return new FrontendAcademicModule(academicModule);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateAcademicModuleDto: UpdateAcademicModuleDto): Promise<FrontendAcademicModule> {
    const academicModule = await this.academicModuleService.update(id, updateAcademicModuleDto);
    return new FrontendAcademicModule(academicModule);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.academicModuleService.delete(id);
  }
}
