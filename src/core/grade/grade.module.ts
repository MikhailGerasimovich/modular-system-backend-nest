import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Grade } from './domain/entity/grade.entity';
import { GradeRepository } from './infrastructure/grade.repository';
import { GradeService } from './application/grade.service';
import { GradeController } from './presentation/grade.controller';

@Module({
  imports: [SequelizeModule.forFeature([Grade])],
  providers: [GradeRepository, GradeService],
  controllers: [GradeController],
})
export class GradeModule {}
