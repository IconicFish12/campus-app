import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateAddressManageDto {
  @IsString({
    message: 'Address is must be a text',
  })
  @MinLength(4, {
    message: 'Address must grater than 10 character',
  })
  @MaxLength(50, {
    message: 'Address must less than 50 character',
  })
  @IsNotEmpty({
    message: 'Address is cannot be empty',
  })
  readonly fullAddress: string;

  @IsString({
    message: 'User id must be a text',
  })
  @IsUUID('4', {
    message: 'User id must be a uuid version 4',
  })
  @IsNotEmpty({
    message: 'User id cannot be empty',
  })
  readonly userId: string;

  @IsString({
    message: 'City id must be a text',
  })
  @IsUUID('4', {
    message: 'City id must be a uuid version 4',
  })
  @IsNotEmpty({
    message: 'City id cannot be empty',
  })
  readonly cityId: string;

  @IsInt({
    message: 'Postal Code is must be a number',
  })
  @IsNotEmpty({
    message: 'Postal Code is cannot be empty',
  })
  //   @IsPostalCode()
  readonly postalCode: number;
}
