import { TeacherDiscipline } from '../entity/teacher-discipline.entity';
import { ClassType } from './class-type.type';

export class FrontendTeacherDiscipline {
  id: number;
  classType: ClassType;
  teacherId: number;
  disciplineAcademicPlanId: number;

  constructor(teacherDiscipline: TeacherDiscipline) {
    this.id = teacherDiscipline.id;
    this.classType = teacherDiscipline.classType;
    this.teacherId = teacherDiscipline.teacherId;
    this.disciplineAcademicPlanId = teacherDiscipline.disciplineAcademicPlanId;
  }
}
