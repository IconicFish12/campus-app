import { Test, TestingModule } from '@nestjs/testing';
import { GeneralScheduleController } from './general-schedule.controller';
import { GeneralScheduleService } from './general-schedule.service';

describe('GeneralScheduleController', () => {
  let controller: GeneralScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneralScheduleController],
      providers: [GeneralScheduleService],
    }).compile();

    controller = module.get<GeneralScheduleController>(GeneralScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
