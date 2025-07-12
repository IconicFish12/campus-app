import { Controller } from '@nestjs/common';
import { PaymentManageService } from './payment-manage.service';

@Controller('payment-manage')
export class PaymentManageController {
  constructor(private readonly paymentManageService: PaymentManageService) {}
}
