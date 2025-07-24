import { Exclude } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsMimeType,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import {
  Gender,
  Status,
} from 'src/common/Database/campus-db/generated/campus-client';
import { IsUnique } from 'src/common/pipes/validators/is-unique-validators';

export class CreateUserDto {
  @IsNotEmpty({
    message: '',
  })
  @IsString({
    message: '',
  })
  @MinLength(4, {})
  readonly firstName: string;

  @IsNotEmpty({
    message: '',
  })
  @IsOptional()
  @IsString({
    message: '',
  })
  @MinLength(4, {})
  readonly middleName: string;

  @IsNotEmpty({
    message: '',
  })
  @IsString({
    message: '',
  })
  @MinLength(4, {})
  readonly lastName: string;

  @IsNotEmpty({
    message: '',
  })
  @IsEmail(
    {
      ignore_max_length: true,
      allow_display_name: true,
      require_display_name: true,
    },
    {
      message: '',
    },
  )
  @IsUnique(
    {
      model: 'user',
      field: 'email',
    },
    {
      message: '',
    },
  )
  @IsString({
    message: '',
  })
  readonly email: string;

  @IsNotEmpty({
    message: '',
  })
  @IsUnique(
    {
      model: 'user',
      field: 'password',
    },
    {
      message: '',
    },
  )
  @Exclude()
  @IsString({
    message: '',
  })
  readonly password: string;

  readonly repeatPassword: string;

  @IsNotEmpty({
    message: '',
  })
  @IsEnum(Gender, {
    message: '',
  })
  readonly gender: Gender;

  @IsNotEmpty({
    message: '',
  })
  @IsEnum(Status, {
    message: '',
  })
  readonly status: Status;

  @IsOptional()
  @IsMimeType()
  readonly profilePicture: string;
}
