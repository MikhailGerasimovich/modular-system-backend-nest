import { IsNotEmpty, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class CreateRoleDto implements IBaseDto {
  @IsString()
  @IsNotEmpty()
  title: string;
}
