import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AcademicModule } from './domain/entity/academic-module.entity';
import { AcademicModuleRepository } from './infrastructure/academic-module.repository';
import { AcademicModuleService } from './application/academic-module.service';
import { AcademicModuleController } from './presentation/academic-module.controller';

@Module({
  imports: [SequelizeModule.forFeature([AcademicModule])],
  providers: [AcademicModuleRepository, AcademicModuleService],
  controllers: [AcademicModuleController],
})
export class AcademicModuleModule {}
