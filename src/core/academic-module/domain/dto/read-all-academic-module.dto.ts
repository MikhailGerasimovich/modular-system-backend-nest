import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseReadAllDto } from 'src/common/read-all/read-all/dto/base-read-all.dto';

export class ReadAllAcademicModuleDto extends BaseReadAllDto {
  @IsString()
  @IsDefined()
  @IsOptional()
  title?: string;

  @IsNumber()
  @IsDefined()
  @IsOptional()
  lecturesNumber?: number;

  @IsNumber()
  @IsDefined()
  @IsOptional()
  practicalNumber?: number;

  @IsNumber()
  @IsDefined()
  @IsOptional()
  laboratoryNumber?: number;

  @IsNumber()
  @IsDefined()
  @IsOptional()
  disciplineAcademicPlanId?: number;
}
