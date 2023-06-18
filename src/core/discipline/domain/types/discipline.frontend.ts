import { Discipline } from '../entity/discipline.entity';

export class FrontendDiscipline {
  id: number;
  title: string;
  shortTitle: string;

  constructor(discipline: Discipline) {
    this.id = discipline.id;
    this.title = discipline.title;
    this.shortTitle = discipline.shortTitle;
  }
}
