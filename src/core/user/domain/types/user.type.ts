import { User } from '../entity/user.entity';

export class FrontendUser {
  id: number;
  login: string;

  constructor(user: User) {
    this.id = user.id;
    this.login = user.login;
  }
}
