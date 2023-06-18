import { Op } from 'sequelize';

export class AcademicPlanFiltration {
  static getLikeFilter(filter: any) {
    const academicPlan = {};

    for (let [key, value] of Object.entries(filter)) {
      academicPlan[key] = { [Op.like]: `%${value}%` };
    }

    return { academicPlan };
  }
}
