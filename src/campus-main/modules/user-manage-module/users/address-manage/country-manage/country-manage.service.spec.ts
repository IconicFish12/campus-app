import { Test, TestingModule } from '@nestjs/testing';
import { CountryManageService } from './country-manage.service';

describe('CountryManageService', () => {
  let service: CountryManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryManageService],
    }).compile();

    service = module.get<CountryManageService>(CountryManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
