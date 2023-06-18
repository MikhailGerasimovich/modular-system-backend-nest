import { IPaginationOptions } from 'src/common/read-all/pagination/interfaces/pagination.interface';
import { ISortingOptions } from 'src/common/read-all/sorting/interfaces/sorting.interface';

export interface IReadAllSpecialityOptions {
  filters?: {
    title?: string;
    shortTitle?: string;
  };
  pagination?: IPaginationOptions;
  sorting?: ISortingOptions;
}
