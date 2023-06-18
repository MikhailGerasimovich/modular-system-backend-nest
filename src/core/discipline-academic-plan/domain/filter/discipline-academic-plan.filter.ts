import { Op } from 'sequelize';

export class DisciplineAcademicPlanFiltration {
  static getLikeFilter(filter: any) {
    const disciplineAcademicPlan = {};

    for (let [key, value] of Object.entries(filter)) {
      disciplineAcademicPlan[key] = { [Op.like]: `%${value}%` };
    }

    return { disciplineAcademicPlan };
  }
}
