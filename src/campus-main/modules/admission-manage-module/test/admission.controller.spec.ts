import { Test, TestingModule } from '@nestjs/testing';
import { AdmissionController } from '../admission.controller';
import { AdmissionService } from '../admission.service';

describe('AdmissionController', () => {
  let controller: AdmissionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdmissionController],
      providers: [AdmissionService],
    }).compile();

    controller = module.get<AdmissionController>(AdmissionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
