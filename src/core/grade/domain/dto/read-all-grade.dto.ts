import { IsDefined, IsInt, IsNumber, IsOptional } from 'class-validator';
import { BaseReadAllDto } from 'src/common/read-all/read-all/dto/base-read-all.dto';

export class ReadAllGradeDto extends BaseReadAllDto {
  @IsOptional()
  @IsDefined()
  @IsNumber()
  value?: number;

  @IsOptional()
  @IsDefined()
  @IsInt()
  studentId?: number;

  @IsOptional()
  @IsDefined()
  @IsInt()
  taskId?: number;
}
