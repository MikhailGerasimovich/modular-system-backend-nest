import { IPaginationOptions } from 'src/common/read-all/pagination/interfaces/pagination.interface';
import { ISortingOptions } from 'src/common/read-all/sorting/interfaces/sorting.interface';

export interface IReadAllAcademicModuleOptions {
  filters?: {
    title?: string;
    lecturesNumber?: number;
    practicalNumber?: number;
    laboratoryNumber?: number;
    disciplineAcademicPlanId?: number;
  };
  pagination?: IPaginationOptions;
  sorting?: ISortingOptions;
}
