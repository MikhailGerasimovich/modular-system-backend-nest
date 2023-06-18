import { Op } from 'sequelize';

export class TeacherDisciplineFiltration {
  static getLikeFilter(filter: any) {
    const teacherDiscipline = {};

    for (let [key, value] of Object.entries(filter)) {
      teacherDiscipline[key] = { [Op.like]: `%${value}%` };
    }

    return { teacherDiscipline };
  }
}
