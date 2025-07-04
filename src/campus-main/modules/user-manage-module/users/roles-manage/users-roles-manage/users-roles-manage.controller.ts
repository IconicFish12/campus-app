import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersRolesManageService } from './users-roles-manage.service';
import { CreateUsersRolesManageDto } from './dto/create-users-roles-manage.dto';
import { UpdateUsersRolesManageDto } from './dto/update-users-roles-manage.dto';

@Controller('users-roles-manage')
export class UsersRolesManageController {
  constructor(private readonly usersRolesManageService: UsersRolesManageService) {}

  @Post()
  create(@Body() createUsersRolesManageDto: CreateUsersRolesManageDto) {
    return this.usersRolesManageService.create(createUsersRolesManageDto);
  }

  @Get()
  findAll() {
    return this.usersRolesManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersRolesManageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersRolesManageDto: UpdateUsersRolesManageDto) {
    return this.usersRolesManageService.update(+id, updateUsersRolesManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersRolesManageService.remove(+id);
  }
}
