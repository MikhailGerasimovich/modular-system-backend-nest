import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Speciality } from './domain/entity/speciality.entity';
import { SpecialityService } from './application/speciality.service';
import { SpecialityController } from './presentation/speciality.controller';
import { SpecialityRepository } from './infrastructure/speciality.repository';

@Module({
  imports: [SequelizeModule.forFeature([Speciality])],
  providers: [SpecialityRepository, SpecialityService],
  controllers: [SpecialityController],
})
export class SpecialityModule {}
