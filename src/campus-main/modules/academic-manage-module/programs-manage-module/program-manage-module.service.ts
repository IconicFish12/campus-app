import { Injectable } from '@nestjs/common';
import { CreateProgramManageModuleDto } from './dto/create-program-manage-module.dto';
import { UpdateProgramManageModuleDto } from './dto/update-program-manage-module.dto';

@Injectable()
export class ProgramManageModuleService {
  create(createProgramManageModuleDto: CreateProgramManageModuleDto) {
    return 'This action adds a new programManageModule';
  }

  findAll() {
    return `This action returns all programManageModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} programManageModule`;
  }

  update(id: number, updateProgramManageModuleDto: UpdateProgramManageModuleDto) {
    return `This action updates a #${id} programManageModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} programManageModule`;
  }
}
