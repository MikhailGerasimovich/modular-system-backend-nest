import { Op } from 'sequelize';

export class UserFiltration {
  static getLikeFilter(filter: any) {
    const user = {};

    for (let [key, value] of Object.entries(filter)) {
      user[key] = { [Op.like]: `%${value}%` };
    }

    return { user };
  }
}
