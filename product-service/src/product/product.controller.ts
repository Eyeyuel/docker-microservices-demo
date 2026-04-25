import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // @MessagePattern('createProduct')
  // create(@Payload() createProductDto: CreateProductDto) {
  //   return this.productService.create(createProductDto);
  // }

  @MessagePattern({ cmd: 'get_all_products' })
  findAll() {
    return this.productService.findAll();
  }

  // @MessagePattern('findOneProduct')
  // findOne(@Payload() id: number) {
  //   return this.productService.findOne(id);
  // }

  // @MessagePattern('updateProduct')
  // update(@Payload() updateProductDto: UpdateProductDto) {
  //   return this.productService.update(updateProductDto.id, updateProductDto);
  // }

  // @MessagePattern('removeProduct')
  // remove(@Payload() id: number) {
  //   return this.productService.remove(id);
  // }
}
