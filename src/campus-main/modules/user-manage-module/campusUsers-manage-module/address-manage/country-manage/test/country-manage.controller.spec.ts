import { Test, TestingModule } from '@nestjs/testing';
import { CountryManageController } from './country-manage.controller';
import { CountryManageService } from './country-manage.service';

describe('CountryManageController', () => {
  let controller: CountryManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountryManageController],
      providers: [CountryManageService],
    }).compile();

    controller = module.get<CountryManageController>(CountryManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
