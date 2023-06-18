import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './domain/entity/role.entity';
import { RoleRepository } from './infrastructure/role.repository';
import { RoleService } from './application/role.service';
import { RoleController } from './presentation/role.controller';

@Module({
  imports: [SequelizeModule.forFeature([Role])],
  providers: [RoleRepository, RoleService],
  controllers: [RoleController],
})
export class RoleModule {}
