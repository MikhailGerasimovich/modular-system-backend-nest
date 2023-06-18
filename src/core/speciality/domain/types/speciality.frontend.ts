import { Speciality } from '../entity/speciality.entity';

export class FrontendSpeciality {
  id: number;
  title: string;
  shortTitle: string;

  constructor(speciality: Speciality) {
    this.id = speciality.id;
    this.title = speciality.title;
    this.shortTitle = speciality.shortTitle;
  }
}
