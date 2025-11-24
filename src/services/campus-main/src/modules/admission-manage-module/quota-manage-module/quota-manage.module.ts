import { Module } from '@nestjs/common';
import { QuotaManageService } from './quota-manage.service';
import { QuotaManageController } from './quota-manage.controller';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  controllers: [QuotaManageController],
  providers: [QuotaManageService, CampusDbService],
  exports: [QuotaManageService],
})
export class QuotaManageModule {}
