import { Test, TestingModule } from '@nestjs/testing';
import { AcademyYearsController } from './academy-years.controller';
import { AcademyYearsService } from './academy-years.service';

describe('AcademyYearsController', () => {
  let controller: AcademyYearsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcademyYearsController],
      providers: [AcademyYearsService],
    }).compile();

    controller = module.get<AcademyYearsController>(AcademyYearsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
