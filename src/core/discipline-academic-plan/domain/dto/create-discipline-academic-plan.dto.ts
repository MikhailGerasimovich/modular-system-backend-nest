import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';
import { ControlForm } from '../types/control-form.type';

export class CreateDisciplineAcademicPlanDto implements IBaseDto {
  @IsNumber()
  @IsNotEmpty()
  semester: number;

  @IsNumber()
  @IsNotEmpty()
  lecturesNumber: number;

  @IsNumber()
  @IsNotEmpty()
  practicalNumber: number;

  @IsNumber()
  @IsNotEmpty()
  laboratoryNumber: number;

  @IsString()
  @IsNotEmpty()
  controlForm: ControlForm;

  @IsNumber()
  @IsNotEmpty()
  disciplineId: number;

  @IsNumber()
  @IsNotEmpty()
  departmentId: number;

  @IsNumber()
  @IsNotEmpty()
  academicPlanId: number;
}
