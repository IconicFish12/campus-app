import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from '../../../util/dto/create-request/create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
