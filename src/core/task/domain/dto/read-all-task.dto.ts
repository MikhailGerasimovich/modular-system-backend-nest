import { IsBoolean, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';
import { BaseReadAllDto } from 'src/common/read-all/read-all/dto/base-read-all.dto';

export class ReadAllTaskDto extends BaseReadAllDto {
  @IsString()
  @IsOptional()
  @IsDefined()
  topic?: string;

  @IsString()
  @IsOptional()
  @IsDefined()
  description?: string;

  @IsBoolean()
  @IsOptional()
  @IsDefined()
  isObligatory?: boolean;

  @IsInt()
  @IsOptional()
  @IsDefined()
  lecturesNumber?: number;

  @IsInt()
  @IsOptional()
  @IsDefined()
  practicalNumber?: number;

  @IsInt()
  @IsOptional()
  @IsDefined()
  laboratoryNumber?: number;

  @IsInt()
  @IsOptional()
  @IsDefined()
  academicModuleId?: number;
}
