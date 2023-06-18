import { IsNotEmpty, IsInt, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class CreateAcademicPlanDto implements IBaseDto {
  @IsString()
  @IsNotEmpty()
  recruitmentYear: string;

  @IsInt()
  @IsNotEmpty()
  specialityId: number;
}
