import { Test, TestingModule } from '@nestjs/testing';
import { StudentEnrollmentManageController } from './student-enrollment-manage.controller';
import { StudentEnrollmentManageService } from './student-enrollment-manage.service';

describe('StudentEnrollmentManageController', () => {
  let controller: StudentEnrollmentManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentEnrollmentManageController],
      providers: [StudentEnrollmentManageService],
    }).compile();

    controller = module.get<StudentEnrollmentManageController>(StudentEnrollmentManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
