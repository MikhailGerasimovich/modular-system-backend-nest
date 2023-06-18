import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filters/exception.filter';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, CoreModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
