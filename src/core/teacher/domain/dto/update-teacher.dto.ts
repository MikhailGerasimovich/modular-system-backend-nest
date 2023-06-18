import { IsInt, IsOptional, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class UpdateTeacherDto implements IBaseDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  surname?: string;

  @IsString()
  @IsOptional()
  patronymic?: string;

  @IsInt()
  @IsOptional()
  departmentId?: number;
}
