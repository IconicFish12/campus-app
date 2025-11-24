import { IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateStateManageDto {
  @IsString({
    message: 'Country id must be a text',
  })
  @IsUUID('4', {
    message: 'Country id must be a uuid version 4',
  })
  @IsNotEmpty({
    message: 'country id cannot be empty',
  })
  readonly countryId: string;

  @IsString({
    message: 'Country State name must be a text',
  })
  @MinLength(4, {
    message: 'Country State name must grater than 4 character',
  })
  @IsNotEmpty({
    message: 'Country State name cannot be empty',
  })
  readonly name: string;
}
