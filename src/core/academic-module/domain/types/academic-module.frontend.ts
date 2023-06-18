import { AcademicModule } from '../entity/academic-module.entity';

export class FrontendAcademicModule {
  id: number;
  title: string;
  lecturesNumber: number;
  practicalNumber: number;
  laboratoryNumber: number;
  disciplineAcademicPlanId: number;

  constructor(academicModule: AcademicModule) {
    this.id = academicModule.id;
    this.title = academicModule.title;
    this.lecturesNumber = academicModule.lecturesNumber;
    this.practicalNumber = academicModule.practicalNumber;
    this.laboratoryNumber = academicModule.laboratoryNumber;
    this.disciplineAcademicPlanId = academicModule.disciplineAcademicPlanId;
  }
}
