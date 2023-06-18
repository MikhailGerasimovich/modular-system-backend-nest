import { Department } from '../entity/department.entity';

export class FrontendDepartment {
  id: number;
  title: string;
  shortTitle: string;

  constructor(department: Department) {
    this.id = department.id;
    this.title = department.title;
    this.shortTitle = department.shortTitle;
  }
}
