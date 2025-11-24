import { Test, TestingModule } from '@nestjs/testing';
import { PaymentManageController } from '../payment-manage.controller';
import { PaymentManageService } from '../payment-manage.service';

describe('PaymentManageController', () => {
  let controller: PaymentManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentManageController],
      providers: [PaymentManageService],
    }).compile();

    controller = module.get<PaymentManageController>(PaymentManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
