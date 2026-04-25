import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'PRODUCT_SERVICE',
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [
              configService.get<string>(
                'RABBITMQ_URL',
                'amqp://localhost:5672',
              ),
            ],
            queue: configService.get<string>('PRODUCT_QUEUE'),
            queueOptions: {
              durable: false,
            },
          },
        }),
        inject: [ConfigService],
      },
    ]),
    // ClientsModule.register([
    //   {
    //     name: 'PRODUCT_SERVICE',
    //     transport: Transport.RMQ, // Transport.TCP
    //     options: {
    //       urls: ['amqp://localhost:5672'],
    //       queue: 'product_queue',
    //       queueOptions: { durable: false },
    //     },
    //   },
    // ]),
  ],
  exports: [ClientsModule],
})
export class ProductClientModule {}
