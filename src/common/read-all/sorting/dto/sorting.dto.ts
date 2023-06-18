import { IsDefined, IsIn, IsString } from 'class-validator';
import { defaultSorting } from 'src/common/constants/read-all/sorting-default';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class SortingDto implements IBaseDto {
  @IsDefined()
  @IsString()
  column: string = defaultSorting.column;

  @IsDefined()
  @IsIn(['DESC', 'ASC'])
  direction: 'DESC' | 'ASC' = defaultSorting.direction;
}
