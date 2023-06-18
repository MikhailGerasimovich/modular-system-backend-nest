import { Op } from 'sequelize';

export class GradeFiltration {
  static getLikeFilter(filter: any) {
    const grade = {};

    for (let [key, value] of Object.entries(filter)) {
      grade[key] = { [Op.like]: `%${value}%` };
    }

    return { grade };
  }
}
