import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Teacher } from './domain/entity/teacher.entity';
import { TeacherRepository } from './infrastructure/teacher.repository';
import { TeacherService } from './application/teacher.service';
import { TeacherController } from './presentation/teacher.controller';

@Module({
  imports: [SequelizeModule.forFeature([Teacher])],
  providers: [TeacherRepository, TeacherService],
  controllers: [TeacherController],
})
export class TeacherModule {}
