import { IPaginationOptions } from 'src/common/read-all/pagination/interfaces/pagination.interface';
import { ISortingOptions } from 'src/common/read-all/sorting/interfaces/sorting.interface';
import { ClassType } from '../types/class-type.type';

export interface IReadAllTeacherDisciplineOptions {
  filters?: {
    classType?: ClassType;
    teacherId?: number;
    disciplineAcademicPlanId?: number;
  };
  pagination?: IPaginationOptions;
  sorting?: ISortingOptions;
}
