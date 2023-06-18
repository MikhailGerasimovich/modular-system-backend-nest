import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { IBaseController } from 'src/common/interfaces/base-controller.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { FrontendDiscipline } from '../domain/types/discipline.frontend';
import { DisciplineService } from '../application/discipline.service';
import { CreateDisciplineDto } from '../domain/dto/create-discipline.dto';
import { ReadAllDisciplineDto } from '../domain/dto/read-all-discipline.dto';
import { UpdateDisciplineDto } from '../domain/dto/update-discipline.dto';

@Controller('discipline')
export class DisciplineController implements IBaseController<FrontendDiscipline> {
  constructor(private readonly disciplineService: DisciplineService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDisciplineDto: CreateDisciplineDto): Promise<FrontendDiscipline> {
    const discipline = await this.disciplineService.create(createDisciplineDto);
    return new FrontendDiscipline(discipline);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async readAll(@Query() readAllOptions: ReadAllDisciplineDto): Promise<ReadAllResult<FrontendDiscipline>> {
    const { pagination, sorting, ...filters } = readAllOptions;
    const disciplines = await this.disciplineService.readAll({ pagination, sorting, filters });
    return {
      totalRecordsNumber: disciplines.totalRecordsNumber,
      records: disciplines.records.map((record) => new FrontendDiscipline(record)),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async readById(@Param('id') id: string): Promise<FrontendDiscipline> {
    const discipline = await this.disciplineService.readById(id);
    return new FrontendDiscipline(discipline);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateDisciplineDto: UpdateDisciplineDto): Promise<FrontendDiscipline> {
    const discipline = await this.disciplineService.update(id, updateDisciplineDto);
    return new FrontendDiscipline(discipline);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.disciplineService.delete(id);
  }
}
