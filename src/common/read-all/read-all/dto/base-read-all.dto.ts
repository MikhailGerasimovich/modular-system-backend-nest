import { Type } from 'class-transformer';
import { IsObject, IsOptional, ValidateNested } from 'class-validator';
import { PaginationDto } from '../../pagination/dto/pagination.dto';
import { SortingDto } from '../../sorting/dto/sorting.dto';
import { IBaseDto } from 'src/common/interfaces/base-dto';

export class BaseReadAllDto implements IBaseDto {
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => PaginationDto)
  public pagination?: PaginationDto;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => SortingDto)
  public sorting?: SortingDto;
}
