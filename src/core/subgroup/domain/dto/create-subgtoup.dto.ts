import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class CreateSubgroupDto implements IBaseDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  groupId: number;
}
