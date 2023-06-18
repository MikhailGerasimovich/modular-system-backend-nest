import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class CreateAcademicModuleDto implements IBaseDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  lecturesNumber: number;

  @IsNumber()
  @IsNotEmpty()
  practicalNumber: number;

  @IsNumber()
  @IsNotEmpty()
  laboratoryNumber: number;

  @IsNumber()
  @IsNotEmpty()
  disciplineAcademicPlanId: number;
}
