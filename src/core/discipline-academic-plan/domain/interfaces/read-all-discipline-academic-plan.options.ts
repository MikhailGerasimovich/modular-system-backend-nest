import { IPaginationOptions } from 'src/common/read-all/pagination/interfaces/pagination.interface';
import { ISortingOptions } from 'src/common/read-all/sorting/interfaces/sorting.interface';
import { ControlForm } from '../types/control-form.type';

export interface IReadAllDisciplineAcademicPlanOptions {
  filters?: {
    semester?: number;
    lecturesNumber?: number;
    practicalNumber?: number;
    laboratoryNumber?: number;
    controlForm?: ControlForm;
    disciplineId?: number;
    departmentId?: number;
    academicPlanId?: number;
  };
  pagination?: IPaginationOptions;
  sorting?: ISortingOptions;
}
