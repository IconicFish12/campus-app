import { Test, TestingModule } from '@nestjs/testing';
import { ProgramManageModuleController } from './program-manage-module.controller';
import { ProgramManageModuleService } from './program-manage-module.service';

describe('ProgramManageModuleController', () => {
  let controller: ProgramManageModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramManageModuleController],
      providers: [ProgramManageModuleService],
    }).compile();

    controller = module.get<ProgramManageModuleController>(ProgramManageModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
