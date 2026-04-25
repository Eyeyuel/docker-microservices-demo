import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductClientModule } from '../clients/product-client.module';

@Module({
  imports: [ProductClientModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
