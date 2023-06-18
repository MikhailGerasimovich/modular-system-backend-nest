import { Op } from 'sequelize';

export class TeacherFiltration {
  static getLikeFilter(filter: any) {
    const teacher = {};

    for (let [key, value] of Object.entries(filter)) {
      teacher[key] = { [Op.like]: `%${value}%` };
    }

    return { teacher };
  }
}
