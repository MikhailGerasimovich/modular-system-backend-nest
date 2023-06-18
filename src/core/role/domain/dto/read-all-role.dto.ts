import { IsDefined, IsOptional, IsString } from 'class-validator';
import { BaseReadAllDto } from 'src/common/read-all/read-all/dto/base-read-all.dto';

export class ReadAllRoleDto extends BaseReadAllDto {
  @IsString()
  @IsOptional()
  @IsDefined()
  title?: string;
}
