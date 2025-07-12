import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProgramManageService } from './program-manage.service';
import { CreateProgramManageDto } from './dto/create-program-manage.dto';
import { UpdateProgramManageDto } from './dto/update-program-manage.dto';

@Controller()
export class ProgramManageController {
  constructor(
    private readonly programManageModuleService: ProgramManageService,
  ) {}

  @Post()
  create(@Body() createProgramManageModuleDto: CreateProgramManageDto) {
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
  update(
    @Param('id') id: string,
    @Body() updateProgramManageModuleDto: UpdateProgramManageDto,
  ) {
    return this.programManageModuleService.update(
      +id,
      updateProgramManageModuleDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programManageModuleService.remove(+id);
  }
}
