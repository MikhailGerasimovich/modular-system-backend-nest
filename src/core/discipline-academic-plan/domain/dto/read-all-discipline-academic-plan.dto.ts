import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';
import { ControlForm } from '../types/control-form.type';
import { BaseReadAllDto } from 'src/common/read-all/read-all/dto/base-read-all.dto';

export class ReadAllDisciplineAcademicPlanDto extends BaseReadAllDto {
  @IsNumber()
  @IsOptional()
  @IsDefined()
  semester?: number;

  @IsNumber()
  @IsOptional()
  @IsDefined()
  lecturesNumber?: number;

  @IsNumber()
  @IsOptional()
  @IsDefined()
  practicalNumber?: number;

  @IsNumber()
  @IsOptional()
  @IsDefined()
  laboratoryNumber?: number;

  @IsString()
  @IsOptional()
  @IsDefined()
  controlForm?: ControlForm;

  @IsNumber()
  @IsOptional()
  @IsDefined()
  disciplineId?: number;

  @IsNumber()
  @IsOptional()
  @IsDefined()
  departmentId?: number;

  @IsNumber()
  @IsOptional()
  @IsDefined()
  academicPlanId?: number;
}
