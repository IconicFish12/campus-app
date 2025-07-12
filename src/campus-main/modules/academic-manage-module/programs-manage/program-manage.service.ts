import { Injectable } from '@nestjs/common';
import { CreateProgramManageDto } from './dto/create-program-manage.dto';
import { UpdateProgramManageDto } from './dto/update-program-manage.dto';

@Injectable()
export class ProgramManageService {
  create(createProgramManageModuleDto: CreateProgramManageDto) {
    return 'This action adds a new programManageModule';
  }

  findAll() {
    return `This action returns all programManageModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} programManageModule`;
  }

  update(id: number, updateProgramManageModuleDto: UpdateProgramManageDto) {
    return `This action updates a #${id} programManageModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} programManageModule`;
  }
}
