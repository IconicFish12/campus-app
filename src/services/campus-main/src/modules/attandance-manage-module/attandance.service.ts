import { Injectable } from '@nestjs/common';
import { CreateAttandanceDto } from '../../util/dto/create-request/create-attandance.dto';
import { UpdateAttandanceDto } from '../../util/dto/update-request/update-attandance.dto';

@Injectable()
export class AttandanceService {
  create(createAttandanceDto: CreateAttandanceDto) {
    return 'This action adds a new attandance';
  }

  findAll() {
    return `This action returns all attandance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attandance`;
  }

  update(id: number, updateAttandanceDto: UpdateAttandanceDto) {
    return `This action updates a #${id} attandance`;
  }

  remove(id: number) {
    return `This action removes a #${id} attandance`;
  }
}
