import { Module } from '@nestjs/common';
import { CampusDbService } from './campus-db.service';

@Module({
  providers: [CampusDbService],
  exports: [CampusDbService],
})
export class CampusDbModule {}
