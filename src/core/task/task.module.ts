import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './domain/entity/task.entity';
import { TaskRepository } from './infrastructure/task.repository';
import { TaskService } from './application/task.service';
import { TaskController } from './presentation/task.controller';

@Module({
  imports: [SequelizeModule.forFeature([Task])],
  providers: [TaskRepository, TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
