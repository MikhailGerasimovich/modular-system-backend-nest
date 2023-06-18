import { IsOptional, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class UpdateDepartmentDto implements IBaseDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  shortTitle?: string;
}
