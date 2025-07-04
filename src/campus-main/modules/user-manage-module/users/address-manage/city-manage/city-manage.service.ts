import { Injectable } from '@nestjs/common';
import { CreateCityManageDto } from './dto/create-city-manage.dto';
import { UpdateCityManageDto } from './dto/update-city-manage.dto';

@Injectable()
export class CityManageService {
  create(createCityManageDto: CreateCityManageDto) {
    return 'This action adds a new cityManage';
  }

  findAll() {
    return `This action returns all cityManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cityManage`;
  }

  update(id: number, updateCityManageDto: UpdateCityManageDto) {
    return `This action updates a #${id} cityManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} cityManage`;
  }
}
