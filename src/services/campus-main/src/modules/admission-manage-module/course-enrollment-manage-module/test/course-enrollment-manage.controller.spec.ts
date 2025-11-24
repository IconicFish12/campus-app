import { Test, TestingModule } from '@nestjs/testing';
import { CourseEnrollmentManageController } from '../course-enrollment-manage.controller';
import { CourseEnrollmentManageService } from '../course-enrollment-manage.service';

describe('CourseEnrollmentManageController', () => {
  let controller: CourseEnrollmentManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseEnrollmentManageController],
      providers: [CourseEnrollmentManageService],
    }).compile();

    controller = module.get<CourseEnrollmentManageController>(
      CourseEnrollmentManageController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
