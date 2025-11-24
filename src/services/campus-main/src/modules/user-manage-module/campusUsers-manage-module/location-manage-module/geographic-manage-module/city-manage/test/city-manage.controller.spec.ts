import { Test, TestingModule } from '@nestjs/testing';
import { CityManageController } from './city-manage.controller';
import { CityManageService } from './city-manage.service';

describe('CityManageController', () => {
  let controller: CityManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CityManageController],
      providers: [CityManageService],
    }).compile();

    controller = module.get<CityManageController>(CityManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
