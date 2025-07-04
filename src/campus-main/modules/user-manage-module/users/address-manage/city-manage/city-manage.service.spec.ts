import { Test, TestingModule } from '@nestjs/testing';
import { CityManageService } from './city-manage.service';

describe('CityManageService', () => {
  let service: CityManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CityManageService],
    }).compile();

    service = module.get<CityManageService>(CityManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
