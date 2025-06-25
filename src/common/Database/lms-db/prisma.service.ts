import {
  // INestApplication,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaLmsService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  // constructor() {
  //   super({
  //     log: ['query', 'info', 'warn', 'error'],
  //   }); // Inisialisasi PrismaClient untuk Campus DB
  // }

  async onModuleInit() {
    await this.$connect;
    console.log('PrismaService connected to database.');
  }

  async onModuleDestroy() {
    await this.$disconnected;
    console.log('PrismaService disconnected from database.');
  }

  // async enableShutdownHooks(app: INestApplication) {
  //   await this.$on('beforeExit', async () => {
  //     await app.close();
  //   });
  // }
}
