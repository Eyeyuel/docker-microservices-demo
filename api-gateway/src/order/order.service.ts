import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrderService {
  constructor(@Inject('ORDER_SERVICE') private client: ClientProxy) {}
  // create(createOrderDto: CreateOrderDto) {
  //   return 'This action adds a new order';
  // }

  findAll() {
    return this.client.send({ cmd: 'get_all_orders' }, {});
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} order`;
  // }

  // update(id: number, updateOrderDto: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} order`;
  // }
}
