import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from './generated/campus_client/client.mjs';
import { PrismaPg } from '@prisma/adapter-pg';
import { env } from 'prisma/config';

@Injectable()
export class DatabaseService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const adapter = new PrismaPg({
      connectionString: env('CAMPUS_DATABASE_URL'),
    });
    super({ adapter });
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
