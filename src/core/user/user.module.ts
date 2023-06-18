import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './domain/entity/user.entity';
import { UserRole } from './domain/entity/user-role.entity';
import { UserRepository } from './infrastructure/user.repository';
import { UserService } from './application/user.service';
import { UserController } from './presentation/user.controller';

@Module({
  imports: [SequelizeModule.forFeature([User, UserRole])],
  providers: [UserRepository, UserService],
  controllers: [UserController],
})
export class UserModule {}
