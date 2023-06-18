import { Op } from 'sequelize';

export class TaskFiltration {
  static getLikeFilter(filter: any) {
    const task = {};

    for (let [key, value] of Object.entries(filter)) {
      task[key] = { [Op.like]: `%${value}%` };
    }

    return { task };
  }
}
