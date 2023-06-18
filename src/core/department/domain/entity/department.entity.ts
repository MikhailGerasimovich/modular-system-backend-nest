import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { DisciplineAcademicPlan } from 'src/core/discipline-academic-plan/domain/entity/discipline-academic-plan.entity';
import { Teacher } from 'src/core/teacher/domain/entity/teacher.entity';

interface IDepartmentCreationAttrs {
  id: number;
  title: string;
  shortTitle: string;
}

@Table({ tableName: 'departments', timestamps: false, underscored: true })
export class Department extends Model<Department, IDepartmentCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  shortTitle: string;

  @HasMany(() => Teacher, 'department_id')
  teachers: Teacher[];

  @HasMany(() => DisciplineAcademicPlan, 'department_id')
  disciplineAcademicPlans: DisciplineAcademicPlan[];
}
