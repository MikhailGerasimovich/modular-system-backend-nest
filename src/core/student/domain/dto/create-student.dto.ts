import { IsNotEmpty, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class CreateStudentDto implements IBaseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  surname: string;

  @IsString()
  @IsNotEmpty()
  patronymic: string;

  @IsString()
  @IsNotEmpty()
  code: string;
}
