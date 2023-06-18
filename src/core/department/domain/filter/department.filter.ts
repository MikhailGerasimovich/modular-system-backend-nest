import { Op } from 'sequelize';

export class DepartmentFiltration {
  static getLikeFilter(filter: any) {
    const department = {};

    for (let [key, value] of Object.entries(filter)) {
      department[key] = { [Op.like]: `%${value}%` };
    }

    return { department };
  }
}
