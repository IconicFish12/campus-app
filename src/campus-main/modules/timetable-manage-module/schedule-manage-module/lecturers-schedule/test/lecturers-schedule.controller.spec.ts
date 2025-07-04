import { Test, TestingModule } from '@nestjs/testing';
import { LecturersScheduleController } from './lecturers-schedule.controller';
import { LecturersScheduleService } from './lecturers-schedule.service';

describe('LecturersScheduleController', () => {
  let controller: LecturersScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LecturersScheduleController],
      providers: [LecturersScheduleService],
    }).compile();

    controller = module.get<LecturersScheduleController>(LecturersScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
