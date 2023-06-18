import { IPaginationOptions } from 'src/common/read-all/pagination/interfaces/pagination.interface';
import { ISortingOptions } from 'src/common/read-all/sorting/interfaces/sorting.interface';

export interface IReadAllStudentOptions {
  filters?: {
    name?: string;
    surname?: string;
    patronymic?: string;
    code?: string;
  };
  pagination?: IPaginationOptions;
  sorting?: ISortingOptions;
}
