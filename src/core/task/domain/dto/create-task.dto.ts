import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class CreateTaskDto implements IBaseDto {
  @IsString()
  @IsNotEmpty()
  topic: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  isObligatory: boolean;

  @IsInt()
  @IsNotEmpty()
  lecturesNumber: number;

  @IsInt()
  @IsNotEmpty()
  practicalNumber: number;

  @IsInt()
  @IsNotEmpty()
  laboratoryNumber: number;

  @IsInt()
  @IsNotEmpty()
  academicModuleId: number;
}
