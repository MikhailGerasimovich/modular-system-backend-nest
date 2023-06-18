import { IsInt, IsNumber, IsOptional } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class UpdateGradeDto implements IBaseDto {
  @IsNumber()
  @IsOptional()
  value?: number;

  @IsInt()
  @IsOptional()
  studentId?: number;

  @IsInt()
  @IsOptional()
  taskId?: number;
}
