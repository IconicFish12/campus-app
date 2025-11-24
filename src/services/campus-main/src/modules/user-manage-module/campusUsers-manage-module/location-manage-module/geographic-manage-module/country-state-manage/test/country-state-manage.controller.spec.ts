import { Test, TestingModule } from '@nestjs/testing';
import { CountryStateManageController } from './country-state-manage.controller';
import { CountryStateManageService } from './country-state-manage.service';

describe('CountryStateManageController', () => {
  let controller: CountryStateManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountryStateManageController],
      providers: [CountryStateManageService],
    }).compile();

    controller = module.get<CountryStateManageController>(CountryStateManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
