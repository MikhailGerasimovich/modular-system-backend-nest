import { IsOptional, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class UpdateRoleDto implements IBaseDto {
  @IsString()
  @IsOptional()
  title?: string;
}
