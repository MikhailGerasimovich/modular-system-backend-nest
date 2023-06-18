import { Student } from '../entity/student.entity';

export class FrontendStudent {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  code: string;

  constructor(student: Student) {
    this.id = student.id;
    this.name = student.name;
    this.surname = student.surname;
    this.patronymic = student.patronymic;
    this.code = student.code;
  }
}
