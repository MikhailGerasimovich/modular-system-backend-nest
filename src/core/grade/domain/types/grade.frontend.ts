import { Grade } from '../entity/grade.entity';

export class FrontendGrade {
  id: number;
  value: number;
  studentId: number;
  taskId: number;

  constructor(grade: Grade) {
    this.id = grade.id;
    this.value = grade.value;
    this.studentId = grade.studentId;
    this.taskId = grade.taskId;
  }
}
