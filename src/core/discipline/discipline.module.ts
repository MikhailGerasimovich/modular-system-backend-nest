import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Discipline } from './domain/entity/discipline.entity';
import { DisciplineRepository } from './infrastructure/discipline.repository';
import { DisciplineService } from './application/discipline.service';
import { DisciplineController } from './presentation/discipline.controller';

@Module({
  imports: [SequelizeModule.forFeature([Discipline])],
  providers: [DisciplineRepository, DisciplineService],
  controllers: [DisciplineController],
})
export class DisciplineModule {}
