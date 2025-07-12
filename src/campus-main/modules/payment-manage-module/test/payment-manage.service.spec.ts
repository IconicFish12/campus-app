import { Test, TestingModule } from '@nestjs/testing';
import { PaymentManageService } from './payment-manage.service';

describe('PaymentManageService', () => {
  let service: PaymentManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentManageService],
    }).compile();

    service = module.get<PaymentManageService>(PaymentManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
