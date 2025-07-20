import { Test, TestingModule } from '@nestjs/testing';
import { AddressManageService } from './address-manage.service';

describe('AddressManageService', () => {
  let service: AddressManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressManageService],
    }).compile();

    service = module.get<AddressManageService>(AddressManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
