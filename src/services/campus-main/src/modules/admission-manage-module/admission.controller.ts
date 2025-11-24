import { Controller, Get, Param } from '@nestjs/common';
import { AdmissionService } from './admission.service';

@Controller()
export class AdmissionController {
  constructor(private readonly admissionService: AdmissionService) {}

  @Get()
  findAll() {
    return this.admissionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.admissionService.findOne(+id);
  }
}
