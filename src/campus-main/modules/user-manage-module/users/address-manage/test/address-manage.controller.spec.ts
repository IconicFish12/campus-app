import { Test, TestingModule } from '@nestjs/testing';
import { AddressManageController } from './address-manage.controller';
import { AddressManageService } from './address-manage.service';

describe('AddressManageController', () => {
  let controller: AddressManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressManageController],
      providers: [AddressManageService],
    }).compile();

    controller = module.get<AddressManageController>(AddressManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
