import { Op } from 'sequelize';

export class GroupFiltration {
  static getLikeFilter(filter: any) {
    const group = {};

    for (let [key, value] of Object.entries(filter)) {
      group[key] = { [Op.like]: `%${value}%` };
    }

    return { group };
  }
}
