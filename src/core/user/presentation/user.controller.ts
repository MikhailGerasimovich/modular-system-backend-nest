import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { ReadAllResult } from 'src/common/read-all/read-all/types/read-all.type';
import { FrontendUser } from '../domain/types/user.type';
import { IBaseController } from 'src/common/interfaces/base-controller.interface';
import { UserService } from '../application/user.service';
import { CreateUserDto } from '../domain/dto/create-user.dto';
import { ReadAllUserDto } from '../domain/dto/read-all-user.dto';
import { UpdateUserDto } from '../domain/dto/update-user.dto';

@Controller('user')
export class UserController implements IBaseController<FrontendUser> {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto): Promise<FrontendUser> {
    const user = await this.userService.create(createUserDto);
    return new FrontendUser(user);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async readAll(@Query() readAllOptions: ReadAllUserDto): Promise<ReadAllResult<FrontendUser>> {
    const { pagination, sorting, ...filters } = readAllOptions;
    const users = await this.userService.readAll({ pagination, sorting, filters });
    return {
      totalRecordsNumber: users.totalRecordsNumber,
      records: users.records.map((record) => new FrontendUser(record)),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async readById(@Param('id') id: string): Promise<FrontendUser> {
    const user = await this.userService.readById(id);
    return new FrontendUser(user);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<FrontendUser> {
    const user = await this.userService.update(id, updateUserDto);
    return new FrontendUser(user);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.userService.delete(id);
  }
}
