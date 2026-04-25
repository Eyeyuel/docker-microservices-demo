import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @MessagePattern('createUser')
  // create(@Payload() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  @MessagePattern({ cmd: 'get_all_users' })
  findAll() {
    return this.userService.findAll();
  }

  // @MessagePattern('findOneUser')
  // findOne(@Payload() id: number) {
  //   return this.userService.findOne(id);
  // }

  // @MessagePattern('updateUser')
  // update(@Payload() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(updateUserDto.id, updateUserDto);
  // }

  // @MessagePattern('removeUser')
  // remove(@Payload() id: number) {
  //   return this.userService.remove(id);
  // }
}
