import { IsInt, IsOptional, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';
import { ClassType } from '../types/class-type.type';

export class UpdateTeacherDisciplineDto implements IBaseDto {
  @IsString()
  @IsOptional()
  classType?: ClassType;

  @IsInt()
  @IsOptional()
  teacherId?: number;

  @IsInt()
  @IsOptional()
  disciplineAcademicPlanId?: number;
}
