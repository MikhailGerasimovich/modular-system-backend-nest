import { Op } from 'sequelize';

export class SpecialityFiltration {
  static getLikeFilter(filter: any) {
    const speciality = {};

    for (let [key, value] of Object.entries(filter)) {
      speciality[key] = { [Op.like]: `%${value}%` };
    }

    return { speciality };
  }
}
