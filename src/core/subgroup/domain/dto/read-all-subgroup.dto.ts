import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseReadAllDto } from 'src/common/read-all/read-all/dto/base-read-all.dto';

export class ReadAllSubgroupDto extends BaseReadAllDto {
  @IsString()
  @IsDefined()
  @IsOptional()
  title?: string;

  @IsNumber()
  @IsDefined()
  @IsOptional()
  groupId?: number;
}
