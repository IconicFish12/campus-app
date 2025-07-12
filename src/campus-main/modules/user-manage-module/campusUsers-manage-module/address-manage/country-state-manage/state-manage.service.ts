import { Injectable } from '@nestjs/common';
import { CreateStateManageDto } from './dto/create-state-manage.dto';
import { UpdateStateManageDto } from './dto/update-state-manage.dto';

@Injectable()
export class StateManageService {
  create(createStateManageDto: CreateStateManageDto) {
    return 'This action adds a new countryStateManage';
  }

  findAll() {
    return `This action returns all countryStateManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} countryStateManage`;
  }

  update(id: number, updateCountryStateManageDto: UpdateStateManageDto) {
    return `This action updates a #${id} countryStateManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} countryStateManage`;
  }
}
