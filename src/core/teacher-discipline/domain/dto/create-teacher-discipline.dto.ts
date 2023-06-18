import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';
import { ClassType } from '../types/class-type.type';

export class CreateTeacherDisciplineDto implements IBaseDto {
  @IsString()
  @IsNotEmpty()
  classType: ClassType;

  @IsInt()
  @IsNotEmpty()
  teacherId: number;

  @IsInt()
  @IsNotEmpty()
  disciplineAcademicPlanId: number;
}
