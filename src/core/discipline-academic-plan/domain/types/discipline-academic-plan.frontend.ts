import { DisciplineAcademicPlan } from '../entity/discipline-academic-plan.entity';
import { ControlForm } from './control-form.type';

export class FrontendDisciplineAcademicPlan {
  id: number;
  semester: number;
  lecturesNumber: number;
  practicalNumber: number;
  laboratoryNumber: number;
  controlForm: ControlForm;
  disciplineId: number;
  departmentId: number;
  academicPlanId: number;

  constructor(disciplineAcademicPlan: DisciplineAcademicPlan) {
    this.id = disciplineAcademicPlan.id;
    this.semester = disciplineAcademicPlan.semester;
    this.lecturesNumber = disciplineAcademicPlan.lecturesNumber;
    this.practicalNumber = disciplineAcademicPlan.practicalNumber;
    this.laboratoryNumber = disciplineAcademicPlan.laboratoryNumber;
    this.controlForm = disciplineAcademicPlan.controlForm;
    this.disciplineId = disciplineAcademicPlan.disciplineId;
    this.departmentId = disciplineAcademicPlan.departmentId;
    this.academicPlanId = disciplineAcademicPlan.academicPlanId;
  }
}
