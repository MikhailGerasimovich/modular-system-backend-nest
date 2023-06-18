import { IPaginationOptions } from 'src/common/read-all/pagination/interfaces/pagination.interface';
import { ISortingOptions } from 'src/common/read-all/sorting/interfaces/sorting.interface';

export interface IReadAllAcademicPlanOptions {
  filters?: {
    recruitmentYear?: string;
    specialityId?: number;
  };
  pagination?: IPaginationOptions;
  sorting?: ISortingOptions;
}
