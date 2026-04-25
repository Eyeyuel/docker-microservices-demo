import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderClientModule } from '../clients/order-client.module';

@Module({
  imports: [OrderClientModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
