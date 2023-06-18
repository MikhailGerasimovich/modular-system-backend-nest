import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { IBaseController } from 'src/common/interfaces/base-controller.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { FrontendAcademicPlan } from '../domain/types/academic-plan.frontend';
import { AcademicPlanService } from '../application/academic-plan.service';
import { CreateAcademicPlanDto } from '../domain/dto/create-academic-plan.dto';
import { ReadAllAcademicPlanDto } from '../domain/dto/read-all-academic-plan.dto';
import { UpdateAcademicPlanDto } from '../domain/dto/update-academic-plan.dto';

@Controller('academic-plan')
export class AcademicPlanController implements IBaseController<FrontendAcademicPlan> {
  constructor(private readonly academicPlanService: AcademicPlanService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createAcademicPlanDto: CreateAcademicPlanDto): Promise<FrontendAcademicPlan> {
    const academicPlan = await this.academicPlanService.create(createAcademicPlanDto);
    return new FrontendAcademicPlan(academicPlan);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async readAll(@Query() readAllOptions: ReadAllAcademicPlanDto): Promise<ReadAllResult<FrontendAcademicPlan>> {
    const { pagination, sorting, ...filters } = readAllOptions;
    const academicPlans = await this.academicPlanService.readAll({ pagination, sorting, filters });
    return {
      totalRecordsNumber: academicPlans.totalRecordsNumber,
      records: academicPlans.records.map((record) => new FrontendAcademicPlan(record)),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async readById(@Param('id') id: string): Promise<FrontendAcademicPlan> {
    const academicPlan = await this.academicPlanService.readById(id);
    return new FrontendAcademicPlan(academicPlan);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateAcademicPlanDto: UpdateAcademicPlanDto): Promise<FrontendAcademicPlan> {
    const academicPlan = await this.academicPlanService.update(id, updateAcademicPlanDto);
    return new FrontendAcademicPlan(academicPlan);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.academicPlanService.delete(id);
  }
}
