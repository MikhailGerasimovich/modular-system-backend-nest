import { Group } from '../entity/group.entity';

export class FrontendGroup {
  id: number;
  title: string;
  academicPlanId: number;

  constructor(group: Group) {
    this.id = group.id;
    this.title = group.title;
    this.academicPlanId = group.academicPlanId;
  }
}
