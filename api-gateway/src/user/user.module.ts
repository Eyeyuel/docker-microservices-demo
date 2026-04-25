import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserClientModule } from '../clients/user-client.module';

@Module({
  imports: [UserClientModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
