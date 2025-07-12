import { Injectable } from '@nestjs/common';

@Injectable()
export class AdmissionService {
  findAll() {
    return `This action returns all admission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admission`;
  }
}
