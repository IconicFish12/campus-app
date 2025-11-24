import { Test, TestingModule } from '@nestjs/testing';
import { QuotaManageService } from '../quota-manage.service';

describe('QuotaManageService', () => {
  let service: QuotaManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuotaManageService],
    }).compile();

    service = module.get<QuotaManageService>(QuotaManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
