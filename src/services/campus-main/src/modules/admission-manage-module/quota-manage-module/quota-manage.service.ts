import { Injectable } from '@nestjs/common';
import { CreateQuotaManageDto } from './dto/create-quota-manage.dto';
import { UpdateQuotaManageDto } from './dto/update-quota-manage.dto';

@Injectable()
export class QuotaManageService {
  create(createQuotaManageDto: CreateQuotaManageDto) {
    return 'This action adds a new quotaManage';
  }

  findAll() {
    return `This action returns all quotaManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quotaManage`;
  }

  update(id: number, updateQuotaManageDto: UpdateQuotaManageDto) {
    return `This action updates a #${id} quotaManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} quotaManage`;
  }
}
