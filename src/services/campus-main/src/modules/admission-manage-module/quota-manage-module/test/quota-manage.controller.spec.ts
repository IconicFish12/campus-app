import { Test, TestingModule } from '@nestjs/testing';
import { QuotaManageController } from '../quota-manage.controller';
import { QuotaManageService } from '../quota-manage.service';

describe('QuotaManageController', () => {
  let controller: QuotaManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuotaManageController],
      providers: [QuotaManageService],
    }).compile();

    controller = module.get<QuotaManageController>(QuotaManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
