import { Injectable } from '@nestjs/common';
import { CreateAddressManageDto } from './dto/create-address-manage.dto';
import { UpdateAddressManageDto } from './dto/update-address-manage.dto';

@Injectable()
export class AddressManageService {
  create(createAddressManageDto: CreateAddressManageDto) {
    return 'This action adds a new addressManage';
  }

  findAll() {
    return `This action returns all addressManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} addressManage`;
  }

  update(id: number, updateAddressManageDto: UpdateAddressManageDto) {
    return `This action updates a #${id} addressManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} addressManage`;
  }
}
