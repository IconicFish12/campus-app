import { Test, TestingModule } from '@nestjs/testing';
import { LecturesScheduleService } from '../lectures-schedule.service';

describe('LecturesScheduleService', () => {
  let service: LecturesScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LecturesScheduleService],
    }).compile();

    service = module.get<LecturesScheduleService>(LecturesScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
