import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}
  // create(createProductDto: CreateProductDto) {
  //   return 'This action adds a new product';
  // }

  findAll() {
    return this.client.send({ cmd: 'get_all_products' }, {});
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} product`;
  // }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
