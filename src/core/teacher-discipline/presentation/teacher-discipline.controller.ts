import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { FrontendTeacherDiscipline } from '../domain/types/teacher-discipline.frontend';
import { IBaseController } from 'src/common/interfaces/base-controller.interface';
import { TeacherDisciplineService } from '../application/teacher-discipline.service';
import { CreateTeacherDisciplineDto } from '../domain/dto/create-teacher-discipline.dto';
import { ReadAllTeacherDisciplineDto } from '../domain/dto/read-all-teacher-discipline.dto';
import { UpdateTeacherDisciplineDto } from '../domain/dto/update-teacher-discipline.dto';

@Controller('teacher-discipline')
export class TeacherDisciplineController implements IBaseController<FrontendTeacherDiscipline> {
  constructor(private readonly teacherDisciplineService: TeacherDisciplineService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createTeacherDisciplineDto: CreateTeacherDisciplineDto): Promise<FrontendTeacherDiscipline> {
    const teacherDiscipline = await this.teacherDisciplineService.create(createTeacherDisciplineDto);
    return new FrontendTeacherDiscipline(teacherDiscipline);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async readAll(@Query() readAllOptions: ReadAllTeacherDisciplineDto): Promise<ReadAllResult<FrontendTeacherDiscipline>> {
    const { pagination, sorting, ...filters } = readAllOptions;
    const teacherDisciplines = await this.teacherDisciplineService.readAll({ pagination, sorting, filters });
    return {
      totalRecordsNumber: teacherDisciplines.totalRecordsNumber,
      records: teacherDisciplines.records.map((record) => new FrontendTeacherDiscipline(record)),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async readById(@Param('id') id: string): Promise<FrontendTeacherDiscipline> {
    const teacherDiscipline = await this.teacherDisciplineService.readById(id);
    return new FrontendTeacherDiscipline(teacherDiscipline);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateTeacherDisciplineDto: UpdateTeacherDisciplineDto): Promise<FrontendTeacherDiscipline> {
    const teacherDiscipline = await this.teacherDisciplineService.update(id, updateTeacherDisciplineDto);
    return new FrontendTeacherDiscipline(teacherDiscipline);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.teacherDisciplineService.delete(id);
  }
}
