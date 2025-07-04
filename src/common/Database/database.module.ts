import { Module } from '@nestjs/common';
import { CampusDbModule } from './campus-db/campus-db.module';
import { LmsDbModule } from './lms-db/lms-db.module';

@Module({
  imports: [CampusDbModule, LmsDbModule],
  exports: [CampusDbModule, LmsDbModule],
})
export class DatabaseModule {}
