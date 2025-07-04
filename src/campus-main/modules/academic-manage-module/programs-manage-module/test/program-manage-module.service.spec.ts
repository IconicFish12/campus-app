import { Test, TestingModule } from '@nestjs/testing';
import { ProgramManageModuleService } from './program-manage-module.service';

describe('ProgramManageModuleService', () => {
  let service: ProgramManageModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramManageModuleService],
    }).compile();

    service = module.get<ProgramManageModuleService>(ProgramManageModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
