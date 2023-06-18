import { IsDefined, IsInt, IsOptional, IsString } from 'class-validator';
import { ClassType } from '../types/class-type.type';
import { BaseReadAllDto } from 'src/common/read-all/read-all/dto/base-read-all.dto';

export class ReadAllTeacherDisciplineDto extends BaseReadAllDto {
  @IsString()
  @IsOptional()
  @IsDefined()
  classType?: ClassType;

  @IsInt()
  @IsOptional()
  @IsDefined()
  teacherId?: number;

  @IsInt()
  @IsOptional()
  @IsDefined()
  disciplineAcademicPlanId?: number;
}
