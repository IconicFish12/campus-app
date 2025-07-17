import { Expose } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ProgramLevel } from 'src/common/Database/campus-db/generated/campus-client';
import { IsUnique } from 'src/common/pipes/validators/is-unique-validators';
export class CreateProgramManageDto {
  // Program Name
  @IsString({
    message: 'Program name is must be a text',
  })
  @MaxLength(15, {
    message: 'Program name must less than 15 character',
  })
  @MinLength(4, {
    message: 'Program name must grater than 4 character',
  })
  @IsNotEmpty({
    message: 'Departmnet name is cannot be empty',
  })
  @Expose({ name: 'program_name' })
  @IsUnique(
    { model: 'programs', field: 'program_name' },
    {
      message: 'The study program has been registered',
    },
  )
  readonly name: string;

  // Program code
  @IsString({
    message: 'Program code is must be a text',
  })
  @MaxLength(8, {
    message: 'Program code must less than 8 character',
  })
  @MinLength(4, {
    message: 'Program code must grater than 4 character',
  })
  @IsNotEmpty({
    message: 'Program code is cannot be empty',
  })
  @IsUnique(
    { model: 'programs', field: 'program_code' },
    {
      message: 'The study program code has been registered',
    },
  )
  @Expose({ name: 'program_code' })
  readonly code: string;

  // Program Level
  @IsNotEmpty({
    message: 'Program Level is cannot be empty',
  })
  @IsEnum(ProgramLevel, {
    message:
      'Program Study Level is Not valid, Choose between D3, BACHELOR, MASTER, and DOCTOR',
  })
  readonly level: ProgramLevel;

  // Departments ID
  @IsString({
    message: 'Department id is must be a text',
  })
  @IsNotEmpty({
    message: 'Department id is cannot be empty',
  })
  @IsUUID('4', {
    message: 'Department ID is Uuid version 4',
  })
  @Expose({ name: 'department_id' })
  readonly departmentId: string;
}
