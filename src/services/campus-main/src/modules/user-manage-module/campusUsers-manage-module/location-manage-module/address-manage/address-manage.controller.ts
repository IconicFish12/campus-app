import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AddressManageService } from './address-manage.service';
import { CreateAddressManageDto } from './dto/create-address-manage.dto';
import { UpdateAddressManageDto } from './dto/update-address-manage.dto';

@Controller()
export class AddressManageController {
  constructor(private readonly addressManageService: AddressManageService) {}

  @Post()
  create(@Body() createAddressManageDto: CreateAddressManageDto) {
    return this.addressManageService.create(createAddressManageDto);
  }

  @Get()
  findAll() {
    return this.addressManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressManageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAddressManageDto: UpdateAddressManageDto,
  ) {
    return this.addressManageService.update(id, updateAddressManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressManageService.remove(id);
  }
}
