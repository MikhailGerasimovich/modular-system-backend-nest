import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TeacherDiscipline } from './domain/entity/teacher-discipline.entity';
import { TeacherDisciplineRepository } from './infrastructure/teacher-discipline.repository';
import { TeacherDisciplineService } from './application/teacher-discipline.service';
import { TeacherDisciplineController } from './presentation/teacher-discipline.controller';

@Module({
  imports: [SequelizeModule.forFeature([TeacherDiscipline])],
  providers: [TeacherDisciplineRepository, TeacherDisciplineService],
  controllers: [TeacherDisciplineController],
})
export class TeacherDisciplineModule {}
