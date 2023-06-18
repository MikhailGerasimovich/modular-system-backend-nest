import { Op } from 'sequelize';

export class RoleFiltration {
  static getLikeFilter(filter: any) {
    const role = {};

    for (let [key, value] of Object.entries(filter)) {
      role[key] = { [Op.like]: `%${value}%` };
    }

    return { role };
  }
}
