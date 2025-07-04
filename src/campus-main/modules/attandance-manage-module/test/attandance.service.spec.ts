import { Test, TestingModule } from '@nestjs/testing';
import { AttandanceService } from './attandance.service';

describe('AttandanceService', () => {
  let service: AttandanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttandanceService],
    }).compile();

    service = module.get<AttandanceService>(AttandanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
