import { Test, TestingModule } from '@nestjs/testing';
import { UsersRolesManageService } from './users-roles-manage.service';

describe('UsersRolesManageService', () => {
  let service: UsersRolesManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersRolesManageService],
    }).compile();

    service = module.get<UsersRolesManageService>(UsersRolesManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
