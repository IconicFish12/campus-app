import { Module } from '@nestjs/common';
import { AttandanceService } from './attandance.service';
import { AttandanceController } from './attandance.controller';
import { CampusDbModule } from 'src/common/Database/campus-db/campus-db.module';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  imports: [CampusDbModule],
  controllers: [AttandanceController],
  providers: [AttandanceService, CampusDbService],
  exports: [AttandanceService],
})
export class AttandanceModule {}
