import { Injectable } from '@nestjs/common';
import { CreateCountryManageDto } from './dto/create-country-manage.dto';
import { UpdateCountryManageDto } from './dto/update-country-manage.dto';

@Injectable()
export class CountryManageService {
  create(createCountryManageDto: CreateCountryManageDto) {
    return 'This action adds a new countryManage';
  }

  findAll() {
    return `This action returns all countryManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} countryManage`;
  }

  update(id: number, updateCountryManageDto: UpdateCountryManageDto) {
    return `This action updates a #${id} countryManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} countryManage`;
  }
}
