import { Controller } from '@nestjs/common';
import { PaymentManageService } from './payment-manage.service';

@Controller()
export class PaymentManageController {
  constructor(private readonly paymentManageService: PaymentManageService) {}
}
