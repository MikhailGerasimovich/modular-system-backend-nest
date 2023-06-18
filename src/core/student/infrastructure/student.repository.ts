import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IBaseRepository } from 'src/common/interfaces/base-repository.interfase';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { defaultSorting } from 'src/common/constants/read-all/sorting-default';
import { Student } from '../domain/entity/student.entity';
import { CreateStudentDto } from '../domain/dto/create-student.dto';
import { IReadAllStudentOptions } from '../domain/interfaces/read-all-student.options';
import { defaultPagination } from 'src/common/constants/read-all/pagination-default';
import { StudentFiltration } from '../domain/filter/student.filter';
import { UpdateStudentDto } from '../domain/dto/update-student.dto';

@Injectable()
export class StudentRepository implements IBaseRepository<Student> {
  constructor(@InjectModel(Student) private readonly student: typeof Student) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    return await this.student.create(createStudentDto);
  }

  async readAll(readAllOptions: IReadAllStudentOptions): Promise<ReadAllResult<Student>> {
    const pagination = readAllOptions.pagination ?? defaultPagination;
    const sorting = readAllOptions.sorting ?? defaultSorting;
    const filters = StudentFiltration.getLikeFilter(readAllOptions.filters);

    const { count, rows } = await this.student.findAndCountAll({
      where: { ...filters.student },
      distinct: true,
      limit: pagination.size,
      offset: pagination.offset,
      order: [[sorting.column, sorting.direction]],
    });

    return {
      totalRecordsNumber: count,
      records: rows,
    };
  }

  async readById(id: string): Promise<Student> {
    return await this.student.findByPk(id);
  }

  async update(id: string, updateStudentDto: UpdateStudentDto): Promise<Student> {
    const [rows, records] = await this.student.update(updateStudentDto, {
      where: { id },
      returning: true,
    });
    return records[0];
  }

  async delete(id: string): Promise<void> {
    await this.student.destroy({ where: { id } });
  }
}
