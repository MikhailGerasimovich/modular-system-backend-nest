import { IsInt, IsOptional, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class UpdateAcademicPlanDto implements IBaseDto {
  @IsString()
  @IsOptional()
  recruitmentYear?: string;

  @IsInt()
  @IsOptional()
  specialityId?: number;
}
