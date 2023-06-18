import { IsNumber, IsOptional, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';
import { ControlForm } from '../types/control-form.type';

export class UpdateDisciplineAcademicPlanDto implements IBaseDto {
  @IsNumber()
  @IsOptional()
  semester?: number;

  @IsNumber()
  @IsOptional()
  lecturesNumber?: number;

  @IsNumber()
  @IsOptional()
  practicalNumber?: number;

  @IsNumber()
  @IsOptional()
  laboratoryNumber?: number;

  @IsString()
  @IsOptional()
  controlForm?: ControlForm;

  @IsNumber()
  @IsOptional()
  disciplineId?: number;

  @IsNumber()
  @IsOptional()
  departmentId?: number;

  @IsNumber()
  @IsOptional()
  academicPlanId?: number;
}
