import { Test, TestingModule } from '@nestjs/testing';
import { LecturesScheduleController } from '../lectures-schedule.controller';
import { LecturesScheduleService } from '../lectures-schedule.service';

describe('LecturesScheduleController', () => {
  let controller: LecturesScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LecturesScheduleController],
      providers: [LecturesScheduleService],
    }).compile();

    controller = module.get<LecturesScheduleController>(
      LecturesScheduleController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
