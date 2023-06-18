import { IsNumber, IsOptional, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class UpdateAcademicModuleDto implements IBaseDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsNumber()
  @IsOptional()
  lecturesNumber?: number;

  @IsNumber()
  @IsOptional()
  practicalNumber?: number;

  @IsNumber()
  @IsOptional()
  laboratoryNumber?: number;

  @IsNumber()
  @IsOptional()
  disciplineAcademicPlanId?: number;
}
