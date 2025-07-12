import { Module } from '@nestjs/common';
import { LmsDbService } from './lms-db.service';

@Module({
  providers: [LmsDbService],
  exports: [LmsDbService],
})
export class LmsDbModule {}
