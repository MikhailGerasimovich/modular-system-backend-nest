import { IsNumber, IsOptional, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class UpdateSubgroupDto implements IBaseDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsNumber()
  @IsOptional()
  groupId?: number;
}
