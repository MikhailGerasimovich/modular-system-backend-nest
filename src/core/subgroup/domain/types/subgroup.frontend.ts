import { Subgroup } from '../entity/subgroup.entity';

export class FrontendSubgroup {
  id: number;
  title: string;
  groupId: number;

  constructor(subgroup: Subgroup) {
    this.id = subgroup.id;
    this.title = subgroup.title;
    this.groupId = subgroup.groupId;
  }
}
