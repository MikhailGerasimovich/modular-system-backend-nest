import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { FrontendTeacher } from '../domain/types/teacher.frontend';
import { IBaseController } from 'src/common/interfaces/base-controller.interface';
import { TeacherService } from '../application/teacher.service';
import { CreateTeacherDto } from '../domain/dto/create-teacher.dto';
import { ReadAllTeacherDto } from '../domain/dto/read-all-teacher.dto';
import { UpdateTeacherDto } from '../domain/dto/update-teacher.dto';

@Controller('teacher')
export class TeacherController implements IBaseController<FrontendTeacher> {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createTeacherDto: CreateTeacherDto): Promise<FrontendTeacher> {
    const teacher = await this.teacherService.create(createTeacherDto);
    return new FrontendTeacher(teacher);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async readAll(@Query() readAllOptions: ReadAllTeacherDto): Promise<ReadAllResult<FrontendTeacher>> {
    const { pagination, sorting, ...filters } = readAllOptions;
    const teachers = await this.teacherService.readAll({ pagination, sorting, filters });
    return {
      totalRecordsNumber: teachers.totalRecordsNumber,
      records: teachers.records.map((record) => new FrontendTeacher(record)),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async readById(@Param('id') id: string): Promise<FrontendTeacher> {
    const teacher = await this.teacherService.readById(id);
    return new FrontendTeacher(teacher);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto): Promise<FrontendTeacher> {
    const teacher = await this.teacherService.update(id, updateTeacherDto);
    return new FrontendTeacher(teacher);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.teacherService.delete(id);
  }
}
