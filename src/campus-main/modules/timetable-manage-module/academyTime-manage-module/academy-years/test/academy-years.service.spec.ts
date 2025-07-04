import { Test, TestingModule } from '@nestjs/testing';
import { AcademyYearsService } from './academy-years.service';

describe('AcademyYearsService', () => {
  let service: AcademyYearsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcademyYearsService],
    }).compile();

    service = module.get<AcademyYearsService>(AcademyYearsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
