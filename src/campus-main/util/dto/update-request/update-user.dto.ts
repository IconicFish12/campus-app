import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from '../create-request/create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
