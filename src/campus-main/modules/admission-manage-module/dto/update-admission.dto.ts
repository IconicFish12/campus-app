import { PartialType } from '@nestjs/mapped-types';
import { CreateAdmissionDto } from './create-admission.dto';

export class UpdateAdmissionDto extends PartialType(CreateAdmissionDto) {}
