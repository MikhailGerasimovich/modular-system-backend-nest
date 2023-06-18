import { Op } from 'sequelize';

export class DisciplineFiltration {
  static getLikeFilter(filter: any) {
    const discipline = {};

    for (let [key, value] of Object.entries(filter)) {
      discipline[key] = { [Op.like]: `%${value}%` };
    }

    return { discipline };
  }
}
