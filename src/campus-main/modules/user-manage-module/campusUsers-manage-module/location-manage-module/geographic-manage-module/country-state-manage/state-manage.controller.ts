import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StateManageService } from './state-manage.service';
import { CreateStateManageDto } from '../../../../../../util/dto/create-request/create-state-manage.dto';
import { UpdateStateManageDto } from './dto/update-state-manage.dto';

@Controller()
export class StateManageController {
  constructor(private readonly countryStateManageService: StateManageService) {}

  @Post()
  create(@Body() createCountryStateManageDto: CreateStateManageDto) {
    return this.countryStateManageService.create(createCountryStateManageDto);
  }

  @Get()
  findAll() {
    return this.countryStateManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryStateManageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCountryStateManageDto: UpdateStateManageDto,
  ) {
    return this.countryStateManageService.update(
      id,
      updateCountryStateManageDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryStateManageService.remove(id);
  }
}
