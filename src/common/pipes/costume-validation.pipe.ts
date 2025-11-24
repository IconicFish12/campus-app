import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CostumeValidationPipe implements PipeTransform {
  transform(value: string) {
    return value;
  }
}
