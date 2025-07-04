import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgramManageModuleService } from './program-manage-module.service';
import { CreateProgramManageModuleDto } from './dto/create-program-manage-module.dto';
import { UpdateProgramManageModuleDto } from './dto/update-program-manage-module.dto';

@Controller('program-manage-module')
export class ProgramManageModuleController {
  constructor(private readonly programManageModuleService: ProgramManageModuleService) {}

  @Post()
  create(@Body() createProgramManageModuleDto: CreateProgramManageModuleDto) {
    return this.programManageModuleService.create(createProgramManageModuleDto);
  }

  @Get()
  findAll() {
    return this.programManageModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programManageModuleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgramManageModuleDto: UpdateProgramManageModuleDto) {
    return this.programManageModuleService.update(+id, updateProgramManageModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programManageModuleService.remove(+id);
  }
}
