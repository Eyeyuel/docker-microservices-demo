import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // @MessagePattern('createOrder')
  // create(@Payload() createOrderDto: CreateOrderDto) {
  //   return this.orderService.create(createOrderDto);
  // }

  @MessagePattern({ cmd: 'get_all_orders' })
  findAll() {
    return this.orderService.findAll();
  }

  // @MessagePattern('findOneOrder')
  // findOne(@Payload() id: number) {
  //   return this.orderService.findOne(id);
  // }

  // @MessagePattern('updateOrder')
  // update(@Payload() updateOrderDto: UpdateOrderDto) {
  //   return this.orderService.update(updateOrderDto.id, updateOrderDto);
  // }

  // @MessagePattern('removeOrder')
  // remove(@Payload() id: number) {
  //   return this.orderService.remove(id);
  // }
}
