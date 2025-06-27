import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<INestApplication>(AppModule, {
    cors: true,
    bodyParser: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Get The NestJS Configuration Service
  const configService = app.get(ConfigService);

  // Microservice App Starter (Listeners/Consumers)

  // Message Broker && MultiDatabase Synchronization (RabbitMQ)
  const rabbitMqMicroserviceOptions: MicroserviceOptions = {
    transport: Transport.RMQ, // Menggunakan Transport.RMQ
    options: {
      urls: [
        configService.get<string>('RABBITMQ_URL') || 'amqp://localhost:5672',
      ],
      queue:
        configService.get<string>('RABBITMQ_QUEUE_NAME_SYNC') ||
        'lms_sync_queue', // Antrean yang akan didengarkan
      queueOptions: {
        durable: true, // Pastikan antrean persisten
      },
    },
  };
  app.connectMicroservice<MicroserviceOptions>(rabbitMqMicroserviceOptions);

  // Cache Management System (Redis)
  const redisMicroserviceOptions: MicroserviceOptions = {
    transport: Transport.REDIS,
    options: {
      host: configService.get<string>('REDIS_HOST') || 'localhost',
      port: configService.get<number>('REDIS_PORT') || 6379,
    },
  };
  app.connectMicroservice<MicroserviceOptions>(redisMicroserviceOptions);

  await app.startAllMicroservices(); // Memulai semua listener microservice yang terhubung
  await app.listen(process.env.PORT || 3000); // Memulai server HTTP
  console.log(`HTTP Application is running on: ${await app.getUrl()}`);
  console.log('All microservices listeners started.');
}
await bootstrap();
