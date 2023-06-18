import { Op } from 'sequelize';

export class SubgroupFiltration {
  static getLikeFilter(filter: any) {
    const subgroup = {};

    for (let [key, value] of Object.entries(filter)) {
      subgroup[key] = { [Op.like]: `%${value}%` };
    }

    return { subgroup };
  }
}
