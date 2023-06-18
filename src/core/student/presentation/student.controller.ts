import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { FrontendStudent } from '../domain/types/student.frontend';
import { IBaseController } from 'src/common/interfaces/base-controller.interface';
import { StudentService } from '../application/student.service';
import { CreateStudentDto } from '../domain/dto/create-student.dto';
import { ReadAllStudentDto } from '../domain/dto/read-all-student.dto';
import { UpdateStudentDto } from '../domain/dto/update-student.dto';

@Controller('student')
export class StudentController implements IBaseController<FrontendStudent> {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createStudentDto: CreateStudentDto): Promise<FrontendStudent> {
    const student = await this.studentService.create(createStudentDto);
    return new FrontendStudent(student);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async readAll(@Query() readAllOptions: ReadAllStudentDto): Promise<ReadAllResult<FrontendStudent>> {
    const { pagination, sorting, ...filters } = readAllOptions;
    const students = await this.studentService.readAll({ pagination, sorting, filters });
    return {
      totalRecordsNumber: students.totalRecordsNumber,
      records: students.records.map((record) => new FrontendStudent(record)),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async readById(@Param('id') id: string): Promise<FrontendStudent> {
    const student = await this.studentService.readById(id);
    return new FrontendStudent(student);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto): Promise<FrontendStudent> {
    const student = await this.studentService.update(id, updateStudentDto);
    return new FrontendStudent(student);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.studentService.delete(id);
  }
}
