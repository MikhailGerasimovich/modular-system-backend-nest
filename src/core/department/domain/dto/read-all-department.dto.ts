import { IsDefined, IsOptional, IsString } from 'class-validator';
import { BaseReadAllDto } from 'src/common/read-all/read-all/dto/base-read-all.dto';

export class ReadAllDepartmentDto extends BaseReadAllDto {
  @IsString()
  @IsDefined()
  @IsOptional()
  title?: string;

  @IsString()
  @IsDefined()
  @IsOptional()
  shortTitle?: string;
}
