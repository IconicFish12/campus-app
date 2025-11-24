import { Test, TestingModule } from '@nestjs/testing';
import { RolesManageController } from './roles-manage.controller';
import { RolesManageService } from './roles-manage.service';

describe('RolesManageController', () => {
  let controller: RolesManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolesManageController],
      providers: [RolesManageService],
    }).compile();

    controller = module.get<RolesManageController>(RolesManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
