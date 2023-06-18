import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './domain/entity/student.entity';
import { StudentRepository } from './infrastructure/student.repository';
import { StudentService } from './application/student.service';
import { StudentController } from './presentation/student.controller';

@Module({
  imports: [SequelizeModule.forFeature([Student])],
  providers: [StudentRepository, StudentService],
  controllers: [StudentController],
})
export class StudentModule {}
