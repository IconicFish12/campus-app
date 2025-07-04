import { Injectable } from '@nestjs/common';
import { CreateCountryStateManageDto } from './dto/create-country-state-manage.dto';
import { UpdateCountryStateManageDto } from './dto/update-country-state-manage.dto';

@Injectable()
export class CountryStateManageService {
  create(createCountryStateManageDto: CreateCountryStateManageDto) {
    return 'This action adds a new countryStateManage';
  }

  findAll() {
    return `This action returns all countryStateManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} countryStateManage`;
  }

  update(id: number, updateCountryStateManageDto: UpdateCountryStateManageDto) {
    return `This action updates a #${id} countryStateManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} countryStateManage`;
  }
}
