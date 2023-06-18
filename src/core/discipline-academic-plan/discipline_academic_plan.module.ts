import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DisciplineAcademicPlan } from './domain/entity/discipline-academic-plan.entity';
import { DisciplineAcademicPlanRepository } from './infrastructure/discipline-academic-plan.repository';
import { DisciplineAcademicPlanService } from './application/discipline-academic-plan.service';
import { DisciplineAcademicPlanController } from './presentation/discipline-academic-plan.controller';

@Module({
  imports: [SequelizeModule.forFeature([DisciplineAcademicPlan])],
  providers: [DisciplineAcademicPlanRepository, DisciplineAcademicPlanService],
  controllers: [DisciplineAcademicPlanController],
})
export class DisciplineAcademicPlanModule {}
