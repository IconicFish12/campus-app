import { Module } from '@nestjs/common';
import { QuotaManageService } from './quota-manage.service';
import { QuotaManageController } from './quota-manage.controller';

@Module({
  controllers: [QuotaManageController],
  providers: [QuotaManageService],
})
export class QuotaManageModule {}
