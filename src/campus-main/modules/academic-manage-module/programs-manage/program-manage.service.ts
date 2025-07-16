import { Injectable } from '@nestjs/common';
import { CreateProgramManageDto } from './dto/create-program-manage.dto';
import { UpdateProgramManageDto } from './dto/update-program-manage.dto';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Injectable()
export class ProgramManageService {
  constructor(private readonly prisma: CampusDbService) {}
  create(request: CreateProgramManageDto) {
    return 'This action adds a new programManageModule';
  }

  findAll() {
    return `This action returns all programManageModule`;
  }

  findOne(id: string) {
    return `This action returns a #${id} programManageModule`;
  }

  update(id: string, request: UpdateProgramManageDto) {
    return `This action updates a #${id} programManageModule`;
  }

  remove(id: string) {
    return `This action removes a #${id} programManageModule`;
  }
}
