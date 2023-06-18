import { IsNotEmpty, IsNumber, IsInt } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class CreateGradeDto implements IBaseDto {
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsInt()
  @IsNotEmpty()
  studentId: number;

  @IsInt()
  @IsNotEmpty()
  taskId: number;
}
