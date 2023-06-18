import { Module } from '@nestjs/common';
import { AcademicPlanRepository } from './infrastructure/academic-plan.repository';
import { AcademicPlanService } from './application/academic-plan.service';
import { AcademicPlanController } from './presentation/academic-plan.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AcademicPlan } from './domain/entity/academic-plan.entity';

@Module({
  imports: [SequelizeModule.forFeature([AcademicPlan])],
  providers: [AcademicPlanRepository, AcademicPlanService],
  controllers: [AcademicPlanController],
})
export class AcademicPlanModule {}
