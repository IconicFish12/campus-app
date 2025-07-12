import { Test, TestingModule } from '@nestjs/testing';
import { ClassEnrollmentMangeService } from './class-enrollment-mange.service';

describe('ClassEnrollmentMangeService', () => {
  let service: ClassEnrollmentMangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassEnrollmentMangeService],
    }).compile();

    service = module.get<ClassEnrollmentMangeService>(ClassEnrollmentMangeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
