import { Module } from '@nestjs/common';
import { PaymentManageService } from './payment-manage.service';
import { PaymentManageController } from './payment-manage.controller';

@Module({
  controllers: [PaymentManageController],
  providers: [PaymentManageService],
})
export class PaymentManageModule {}
