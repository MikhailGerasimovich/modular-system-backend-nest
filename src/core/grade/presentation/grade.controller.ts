import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { FrontendGrade } from '../domain/types/grade.frontend';
import { GradeService } from '../application/grade.service';
import { IBaseController } from 'src/common/interfaces/base-controller.interface';
import { CreateGradeDto } from '../domain/dto/create-grade.dto';
import { ReadAllGradeDto } from '../domain/dto/read-all-grade.dto';
import { UpdateGradeDto } from '../domain/dto/update-grade.dto';

@Controller('grade')
export class GradeController implements IBaseController<FrontendGrade> {
  constructor(private readonly gradeService: GradeService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createGradeDto: CreateGradeDto): Promise<FrontendGrade> {
    const grade = await this.gradeService.create(createGradeDto);
    return new FrontendGrade(grade);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async readAll(@Query() readAllOptions: ReadAllGradeDto): Promise<ReadAllResult<FrontendGrade>> {
    const { pagination, sorting, ...filters } = readAllOptions;
    const grades = await this.gradeService.readAll({ pagination, sorting, filters });
    return {
      totalRecordsNumber: grades.totalRecordsNumber,
      records: grades.records.map((record) => new FrontendGrade(record)),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async readById(@Param('id') id: string): Promise<FrontendGrade> {
    const grade = await this.gradeService.readById(id);
    return new FrontendGrade(grade);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateGradeDto: UpdateGradeDto): Promise<FrontendGrade> {
    const grade = await this.gradeService.update(id, updateGradeDto);
    return new FrontendGrade(grade);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.gradeService.delete(id);
  }
}
