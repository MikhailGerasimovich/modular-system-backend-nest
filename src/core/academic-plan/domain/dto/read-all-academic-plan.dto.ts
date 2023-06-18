import { IsDefined, IsInt, IsOptional, IsString } from 'class-validator';
import { BaseReadAllDto } from 'src/common/read-all/read-all/dto/base-read-all.dto';

export class ReadAllAcademicPlanDto extends BaseReadAllDto {
  @IsString()
  @IsOptional()
  @IsDefined()
  recruitmentYear?: string;

  @IsInt()
  @IsOptional()
  @IsDefined()
  specialityId: number;
}
