import { Op } from 'sequelize';

export class AcademicModuleFiltration {
  static getLikeFilter(filter: any) {
    const academicModule = {};

    for (let [key, value] of Object.entries(filter)) {
      academicModule[key] = { [Op.like]: `%${value}%` };
    }

    return { academicModule };
  }
}
