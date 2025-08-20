import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RolesManageService } from './roles-manage.service';
import { CreateRolesManageDto } from '../../../../util/dto/create-request/create-roles-manage.dto';
import { UpdateRolesManageDto } from '../../../../util/dto/update-request/update-roles-manage.dto';

@Controller()
export class RolesManageController {
  constructor(private readonly rolesManageService: RolesManageService) {}

  @Post()
  create(@Body() createRolesManageDto: CreateRolesManageDto) {
    return this.rolesManageService.create(createRolesManageDto);
  }

  @Get()
  findAll() {
    return this.rolesManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesManageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRolesManageDto: UpdateRolesManageDto,
  ) {
    return this.rolesManageService.update(+id, updateRolesManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesManageService.remove(+id);
  }
}
