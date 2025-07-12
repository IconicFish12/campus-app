import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentManageModuleController } from './department-manage-module.controller';
import { DepartmentManageModuleService } from './department-manage-module.service';

describe('DepartmentManageModuleController', () => {
  let controller: DepartmentManageModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentManageModuleController],
      providers: [DepartmentManageModuleService],
    }).compile();

    controller = module.get<DepartmentManageModuleController>(DepartmentManageModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
