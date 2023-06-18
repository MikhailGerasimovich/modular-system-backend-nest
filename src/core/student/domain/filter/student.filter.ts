import { Op } from 'sequelize';

export class StudentFiltration {
  static getLikeFilter(filter: any) {
    const student = {};

    for (let [key, value] of Object.entries(filter)) {
      student[key] = { [Op.like]: `%${value}%` };
    }

    return { student };
  }
}
