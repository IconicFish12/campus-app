import { PartialType } from '@nestjs/mapped-types';
import { CreateClassEnrollmentManageDto } from './create-class-enrollment-mange.dto';

export class UpdateClassEnrollmentManageDto extends PartialType(
  CreateClassEnrollmentManageDto,
) {}
