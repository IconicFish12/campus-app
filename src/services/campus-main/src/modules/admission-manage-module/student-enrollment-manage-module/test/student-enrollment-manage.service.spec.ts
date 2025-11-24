import { Test, TestingModule } from '@nestjs/testing';
import { StudentEnrollmentManageService } from './student-enrollment-manage.service';

describe('StudentEnrollmentManageService', () => {
  let service: StudentEnrollmentManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentEnrollmentManageService],
    }).compile();

    service = module.get<StudentEnrollmentManageService>(StudentEnrollmentManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
