import { Module } from '@nestjs/common';
import { CampusDbServiceService } from './campus-db/campus-db-service.service';
import { LmsDbServiceService } from './lms-db/lms-db-service.service';

@Module({
  providers: [CampusDbServiceService, LmsDbServiceService],
})
export class DatabaseModule {}
