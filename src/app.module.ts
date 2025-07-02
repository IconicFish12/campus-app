import { Module } from '@nestjs/common';
import { DatabaseModule } from './common/Database/database.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [DatabaseModule, RouterModule.register([])],
})
export class AppModule {}
