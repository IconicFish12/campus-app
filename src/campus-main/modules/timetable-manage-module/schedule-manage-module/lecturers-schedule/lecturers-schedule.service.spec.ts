import { Test, TestingModule } from '@nestjs/testing';
import { LecturersScheduleService } from './lecturers-schedule.service';

describe('LecturersScheduleService', () => {
  let service: LecturersScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LecturersScheduleService],
    }).compile();

    service = module.get<LecturersScheduleService>(LecturersScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
