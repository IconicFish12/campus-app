import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentEnrollmentManageDto } from '../../../util/dto/create-request/create-student-enrollment-manage.dto';

export class UpdateStudentEnrollmentManageDto extends PartialType(
  CreateStudentEnrollmentManageDto,
) {}
