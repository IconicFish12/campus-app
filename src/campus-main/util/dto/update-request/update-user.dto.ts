import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from '../../../../util/dto/create-request/create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
