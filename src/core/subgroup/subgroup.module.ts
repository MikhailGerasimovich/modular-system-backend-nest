import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Subgroup } from './domain/entity/subgroup.entity';
import { SubgroupRepository } from './infrastructure/subgroup.repository';
import { SubgroupService } from './application/subgroup.service';
import { SubgroupController } from './presentation/subgroup.controller';
import { StudentSubgroup } from './domain/entity/student-subgroup.entity';

@Module({
  imports: [SequelizeModule.forFeature([Subgroup, StudentSubgroup])],
  providers: [SubgroupRepository, SubgroupService],
  controllers: [SubgroupController],
})
export class SubgroupModule {}
