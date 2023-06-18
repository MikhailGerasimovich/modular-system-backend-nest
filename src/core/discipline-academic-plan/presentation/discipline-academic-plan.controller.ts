import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { IBaseController } from 'src/common/interfaces/base-controller.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { FrontendDisciplineAcademicPlan } from '../domain/types/discipline-academic-plan.frontend';
import { DisciplineAcademicPlanService } from '../application/discipline-academic-plan.service';
import { CreateDisciplineAcademicPlanDto } from '../domain/dto/create-discipline-academic-plan.dto';
import { ReadAllDisciplineAcademicPlanDto } from '../domain/dto/read-all-discipline-academic-plan.dto';
import { UpdateDisciplineAcademicPlanDto } from '../domain/dto/update-discipline-academic-plan.dto';

@Controller('discipline-academic-plan')
export class DisciplineAcademicPlanController implements IBaseController<FrontendDisciplineAcademicPlan> {
  constructor(private readonly disciplineAcademicPlanService: DisciplineAcademicPlanService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDisciplineAcademicPlanDto: CreateDisciplineAcademicPlanDto): Promise<FrontendDisciplineAcademicPlan> {
    const disciplineAcademicPlan = await this.disciplineAcademicPlanService.create(createDisciplineAcademicPlanDto);
    return new FrontendDisciplineAcademicPlan(disciplineAcademicPlan);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async readAll(@Query() readAllOptions: ReadAllDisciplineAcademicPlanDto): Promise<ReadAllResult<FrontendDisciplineAcademicPlan>> {
    const { pagination, sorting, ...filters } = readAllOptions;
    const disciplineAcademicPlans = await this.disciplineAcademicPlanService.readAll({ pagination, sorting, filters });
    return {
      totalRecordsNumber: disciplineAcademicPlans.totalRecordsNumber,
      records: disciplineAcademicPlans.records.map((record) => new FrontendDisciplineAcademicPlan(record)),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async readById(@Param('id') id: string): Promise<FrontendDisciplineAcademicPlan> {
    const disciplineAcademicPlan = await this.disciplineAcademicPlanService.readById(id);
    return new FrontendDisciplineAcademicPlan(disciplineAcademicPlan);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateDisciplineAcademicPlanDto: UpdateDisciplineAcademicPlanDto): Promise<FrontendDisciplineAcademicPlan> {
    const disciplineAcademicPlan = await this.disciplineAcademicPlanService.update(id, updateDisciplineAcademicPlanDto);
    return new FrontendDisciplineAcademicPlan(disciplineAcademicPlan);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.disciplineAcademicPlanService.delete(id);
  }
}
