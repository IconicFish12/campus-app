import { Test, TestingModule } from '@nestjs/testing';
import { ClassEnrollmentMangeController } from './class-enrollment-mange.controller';
import { ClassEnrollmentMangeService } from './class-enrollment-mange.service';

describe('ClassEnrollmentMangeController', () => {
  let controller: ClassEnrollmentMangeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassEnrollmentMangeController],
      providers: [ClassEnrollmentMangeService],
    }).compile();

    controller = module.get<ClassEnrollmentMangeController>(ClassEnrollmentMangeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
