import { Test, TestingModule } from '@nestjs/testing';
import { GeneralScheduleService } from './general-schedule.service';

describe('GeneralScheduleService', () => {
  let service: GeneralScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneralScheduleService],
    }).compile();

    service = module.get<GeneralScheduleService>(GeneralScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
