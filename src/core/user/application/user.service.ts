import { Injectable } from '@nestjs/common';
import { IBaseService } from 'src/common/interfaces/base-service.interface';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { UserRepository } from '../infrastructure/user.repository';
import { User } from '../domain/entity/user.entity';
import { CreateUserDto } from '../domain/dto/create-user.dto';
import { IReadAllUserOptions } from '../domain/interfaces/read-all-user.options';
import { UpdateUserDto } from '../domain/dto/update-user.dto';

@Injectable()
export class UserService implements IBaseService<User> {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(createUserDto);
    return user;
  }

  async readAll(readAllOptions: IReadAllUserOptions): Promise<ReadAllResult<User>> {
    const users = await this.userRepository.readAll(readAllOptions);
    return users;
  }

  async readById(id: string): Promise<User> {
    const user = await this.userRepository.readById(id);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.update(id, updateUserDto);
    return user;
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
