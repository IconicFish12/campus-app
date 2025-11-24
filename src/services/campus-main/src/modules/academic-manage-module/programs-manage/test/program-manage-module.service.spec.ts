import { Test, TestingModule } from '@nestjs/testing';
import { ProgramManageService } from '../program-manage.service';

describe('ProgramManageModuleService', () => {
  let service: ProgramManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramManageService],
    }).compile();

    service = module.get<ProgramManageService>(ProgramManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
