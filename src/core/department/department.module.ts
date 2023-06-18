import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Department } from './domain/entity/department.entity';
import { DepartmentRepository } from './infrastructure/department.repository';
import { DepartmentService } from './application/department.service';
import { DepartmentController } from './presentation/department.controller';

@Module({
  imports: [SequelizeModule.forFeature([Department])],
  providers: [DepartmentRepository, DepartmentService],
  controllers: [DepartmentController],
})
export class DepartmentModule {}
