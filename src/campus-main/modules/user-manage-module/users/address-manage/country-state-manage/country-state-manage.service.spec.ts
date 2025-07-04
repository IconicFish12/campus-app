import { Test, TestingModule } from '@nestjs/testing';
import { CountryStateManageService } from './country-state-manage.service';

describe('CountryStateManageService', () => {
  let service: CountryStateManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryStateManageService],
    }).compile();

    service = module.get<CountryStateManageService>(CountryStateManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
