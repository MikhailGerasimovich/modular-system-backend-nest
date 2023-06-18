import { IPaginationOptions } from 'src/common/read-all/pagination/interfaces/pagination.interface';
import { ISortingOptions } from 'src/common/read-all/sorting/interfaces/sorting.interface';

export interface IReadAllGradeOptions {
  filters?: {
    value?: number;
    studentId?: number;
    taskId?: number;
  };
  pagination?: IPaginationOptions;
  sorting?: ISortingOptions;
}
