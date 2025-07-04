import { Test, TestingModule } from '@nestjs/testing';
import { RolesManageService } from './roles-manage.service';

describe('RolesManageService', () => {
  let service: RolesManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesManageService],
    }).compile();

    service = module.get<RolesManageService>(RolesManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
