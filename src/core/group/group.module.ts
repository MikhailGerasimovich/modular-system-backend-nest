import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GroupRepository } from './infrastructure/group.repository';
import { GroupService } from './application/group.service';
import { GroupController } from './presentation/group.controller';
import { Group } from './domain/entity/group.entity';

@Module({
  imports: [SequelizeModule.forFeature([Group])],
  providers: [GroupRepository, GroupService],
  controllers: [GroupController],
})
export class GroupModule {}
