import { PartialType } from '@nestjs/mapped-types';
import { CreateClassEnrollmentManageDto } from '../../../util/dto/create-request/create-class-enrollment-mange.dto';

export class UpdateClassEnrollmentManageDto extends PartialType(
  CreateClassEnrollmentManageDto,
) {}
