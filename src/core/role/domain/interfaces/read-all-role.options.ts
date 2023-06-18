import { IPaginationOptions } from 'src/common/read-all/pagination/interfaces/pagination.interface';
import { ISortingOptions } from 'src/common/read-all/sorting/interfaces/sorting.interface';

export interface IReadAllRoleOptions {
  filters?: {
    title?: string;
  };
  pagination?: IPaginationOptions;
  sorting?: ISortingOptions;
}
