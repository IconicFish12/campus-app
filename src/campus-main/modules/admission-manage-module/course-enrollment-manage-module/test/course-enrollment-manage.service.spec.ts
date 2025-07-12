import { Test, TestingModule } from '@nestjs/testing';
import { CourseEnrollmentManageService } from '../course-enrollment-manage.service';

describe('CourseEnrollmentManageService', () => {
  let service: CourseEnrollmentManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseEnrollmentManageService],
    }).compile();

    service = module.get<CourseEnrollmentManageService>(CourseEnrollmentManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
