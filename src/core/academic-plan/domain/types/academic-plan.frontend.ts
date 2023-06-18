import { AcademicPlan } from '../entity/academic-plan.entity';

export class FrontendAcademicPlan {
  id: number;
  recruitmentYear: string;
  specialityId: number;

  constructor(academicPlan: AcademicPlan) {
    this.id = academicPlan.id;
    this.recruitmentYear = academicPlan.recruitmentYear;
    this.specialityId = academicPlan.specialityId;
  }
}
