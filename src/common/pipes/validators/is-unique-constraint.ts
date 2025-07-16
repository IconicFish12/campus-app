/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { CampusPrismaModelName } from './models/campus-model.prisma';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@ValidatorConstraint({ name: 'isUnique', async: true })
@Injectable()
export class IsUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly campusDbService: CampusDbService) {}

  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    const [model, field, excludeIdField] = args.constraints as [
      CampusPrismaModelName,
      string,
      string?,
    ];

    if (value === undefined || value === null || value === '') {
      return true;
    }

    const modelAccessor: { findFirst: (args: any) => Promise<any> } = (
      this.campusDbService as any
    )[model];

    if (!modelAccessor || typeof modelAccessor.findFirst !== 'function') {
      console.error(
        `IsUniqueConstraint: Model "${String(model)}" tidak ditemukan atau tidak mendukung findFirst.`,
      );
      return false;
    }

    const whereCondition: { [key: string]: any } = {
      [field]: value,
    };
    if (
      excludeIdField &&
      args.object &&
      (args.object as Record<string, any>)[excludeIdField]
    ) {
      const excludeId = (args.object as Record<string, any>)[excludeIdField];
      whereCondition.NOT = {
        id: excludeId,
      };
    }

    try {
      const existingRecord = await modelAccessor.findFirst({
        where: whereCondition,
      });
      return !existingRecord;
    } catch (error) {
      console.error(
        `IsUniqueConstraint: Database error checking uniqueness for field ${field}:`,
        error,
      );
      return false;
    }
  }

  defaultMessage(args: ValidationArguments): string {
    const [, field] = args.constraints as [
      CampusPrismaModelName,
      string,
      string?,
    ];
    return `Nilai '${args.value}' untuk field '${field}' sudah ada.`;
  }
}
