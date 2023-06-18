import { Teacher } from '../entity/teacher.entity';

export class FrontendTeacher {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  departmentId: number;

  constructor(teacher: Teacher) {
    this.id = teacher.id;
    this.name = teacher.name;
    this.surname = teacher.surname;
    this.patronymic = teacher.patronymic;
    this.departmentId = teacher.departmentId;
  }
}
