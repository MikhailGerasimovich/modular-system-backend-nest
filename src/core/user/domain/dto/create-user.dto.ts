import { IsNotEmpty, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class CreateUserDto implements IBaseDto {
  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
