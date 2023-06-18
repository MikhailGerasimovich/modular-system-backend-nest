import { Type } from 'class-transformer';
import { IsDefined, IsInt } from 'class-validator';
import { defaultPagination } from 'src/common/constants/read-all/pagination-default';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class PaginationDto implements IBaseDto {
  @IsDefined()
  @IsInt()
  @Type(() => Number)
  page: number = defaultPagination.page;

  @IsDefined()
  @IsInt()
  @Type(() => Number)
  size: number = defaultPagination.size;

  @IsDefined()
  get offset() {
    return (this.page - 1) * this.size;
  }
}
