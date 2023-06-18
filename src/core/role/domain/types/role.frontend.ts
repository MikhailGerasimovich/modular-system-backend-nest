import { Role } from '../entity/role.entity';

export class FrontendRole {
  id: number;
  title: string;

  constructor(role: Role) {
    this.id = role.id;
    this.title = role.title;
  }
}
