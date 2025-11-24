import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentEnrollmentManageDto } from './create-student-enrollment-manage.dto';

export class UpdateStudentEnrollmentManageDto extends PartialType(
  CreateStudentEnrollmentManageDto,
) {}
