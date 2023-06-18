import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class UpdateTaskDto implements IBaseDto {
  @IsString()
  @IsOptional()
  topic?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  isObligatory?: boolean;

  @IsInt()
  @IsOptional()
  lecturesNumber?: number;

  @IsInt()
  @IsOptional()
  practicalNumber?: number;

  @IsInt()
  @IsOptional()
  laboratoryNumber?: number;

  @IsInt()
  @IsOptional()
  academicModuleId?: number;
}
