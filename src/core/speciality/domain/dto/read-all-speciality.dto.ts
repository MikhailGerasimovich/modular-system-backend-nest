import { IsDefined, IsOptional, IsString } from 'class-validator';
import { BaseReadAllDto } from 'src/common/read-all/read-all/dto/base-read-all.dto';

export class ReadAllSpecialityDto extends BaseReadAllDto {
  @IsOptional()
  @IsDefined()
  @IsString()
  public title?: string;

  @IsOptional()
  @IsDefined()
  @IsString()
  shortTitle?: string;
}
