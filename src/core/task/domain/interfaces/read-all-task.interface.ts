import { IPaginationOptions } from 'src/common/read-all/pagination/interfaces/pagination.interface';
import { ISortingOptions } from 'src/common/read-all/sorting/interfaces/sorting.interface';

export interface IReadAllTaskOptions {
  filters?: {
    topic?: string;
    description?: string;
    isObligatory?: boolean;
    lecturesNumber?: number;
    practicalNumber?: number;
    laboratoryNumber?: number;
    academicModuleId?: number;
  };
  pagination?: IPaginationOptions;
  sorting?: ISortingOptions;
}
