import { IsString, IsUUID, IsNotEmpty, MinLength } from 'class-validator';

export class CreateCityManageDto {
  @IsString({
    message: 'State id must be a text',
  })
  @IsUUID('4', {
    message: 'State id must be a uuid version 4',
  })
  @IsNotEmpty({
    message: 'State id cannot be empty',
  })
  readonly stateId: string;

  @IsString({
    message: 'City name must be a text',
  })
  @MinLength(4, {
    message: 'City name must grater than 4 character',
  })
  @IsNotEmpty({
    message: 'City name cannot be empty',
  })
  readonly name: string;
}
