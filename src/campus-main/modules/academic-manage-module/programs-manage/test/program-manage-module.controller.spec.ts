import { Test, TestingModule } from '@nestjs/testing';
import { ProgramManageController } from '../program-manage.controller';
import { ProgramManageService } from '../program-manage.service';

describe('ProgramManageModuleController', () => {
  let controller: ProgramManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramManageController],
      providers: [ProgramManageService],
    }).compile();

    controller = module.get<ProgramManageController>(ProgramManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
