import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentManageModuleService } from './department-manage-module.service';

describe('DepartmentManageModuleService', () => {
  let service: DepartmentManageModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartmentManageModuleService],
    }).compile();

    service = module.get<DepartmentManageModuleService>(DepartmentManageModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
