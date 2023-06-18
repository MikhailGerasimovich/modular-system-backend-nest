import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class CreateGroupDto implements IBaseDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  academicPlanId: number;
}
