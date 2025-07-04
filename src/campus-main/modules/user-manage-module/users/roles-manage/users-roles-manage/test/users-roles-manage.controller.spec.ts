import { Test, TestingModule } from '@nestjs/testing';
import { UsersRolesManageController } from './users-roles-manage.controller';
import { UsersRolesManageService } from './users-roles-manage.service';

describe('UsersRolesManageController', () => {
  let controller: UsersRolesManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersRolesManageController],
      providers: [UsersRolesManageService],
    }).compile();

    controller = module.get<UsersRolesManageController>(UsersRolesManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
