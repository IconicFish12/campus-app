import { Test, TestingModule } from '@nestjs/testing';
import { AttandanceController } from '../attandance.controller';
import { AttandanceService } from '../attandance.service';

describe('AttandanceController', () => {
  let controller: AttandanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttandanceController],
      providers: [AttandanceService],
    }).compile();

    controller = module.get<AttandanceController>(AttandanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
