import { PartialType } from '@nestjs/mapped-types';
import { CreateProgramManageModuleDto } from './create-program-manage-module.dto';

export class UpdateProgramManageModuleDto extends PartialType(CreateProgramManageModuleDto) {}
