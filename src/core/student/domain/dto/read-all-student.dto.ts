import { IsDefined, IsOptional, IsString } from 'class-validator';
import { BaseReadAllDto } from 'src/common/read-all/read-all/dto/base-read-all.dto';

export class ReadAllStudentDto extends BaseReadAllDto {
  @IsOptional()
  @IsDefined()
  @IsString()
  name?: string;

  @IsOptional()
  @IsDefined()
  @IsString()
  surname?: string;

  @IsOptional()
  @IsDefined()
  @IsString()
  patronymic?: string;

  @IsOptional()
  @IsDefined()
  @IsString()
  code?: string;
}
