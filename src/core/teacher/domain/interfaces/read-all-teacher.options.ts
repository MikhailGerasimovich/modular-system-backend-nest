import { IPaginationOptions } from 'src/common/read-all/pagination/interfaces/pagination.interface';
import { ISortingOptions } from 'src/common/read-all/sorting/interfaces/sorting.interface';

export interface IReadAllTeacherOptions {
  filters?: {
    name?: string;
    surname?: string;
    patronymic?: string;
    departmentId?: number;
  };
  pagination?: IPaginationOptions;
  sorting?: ISortingOptions;
}
