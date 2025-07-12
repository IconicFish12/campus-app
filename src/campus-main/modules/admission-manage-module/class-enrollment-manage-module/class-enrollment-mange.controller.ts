import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClassEnrollmentManageService } from './class-enrollment-mange.service';
import { CreateClassEnrollmentManageDto } from './dto/create-class-enrollment-mange.dto';
import { UpdateClassEnrollmentManageDto } from './dto/update-class-enrollment-mange.dto';

@Controller()
export class ClassEnrollmentManageController {
  constructor(
    private readonly classEnrollmentMangeService: ClassEnrollmentManageService,
  ) {}

  @Post()
  create(
    @Body() createClassEnrollmentMangeDto: CreateClassEnrollmentManageDto,
  ) {
    return this.classEnrollmentMangeService.create(
      createClassEnrollmentMangeDto,
    );
  }

  @Get()
  findAll() {
    return this.classEnrollmentMangeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classEnrollmentMangeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClassEnrollmentMangeDto: UpdateClassEnrollmentManageDto,
  ) {
    return this.classEnrollmentMangeService.update(
      +id,
      updateClassEnrollmentMangeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classEnrollmentMangeService.remove(+id);
  }
}
