import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { DisciplineAcademicPlan } from 'src/core/discipline-academic-plan/domain/entity/discipline-academic-plan.entity';
import { Task } from 'src/core/task/domain/entity/task.entity';

interface IAcademicModuleCreationAttrs {
  id: number;
  title: string;
  lecturesNumber: number;
  practicalNumber: number;
  laboratoryNumber: number;
  disciplineAcademicPlanId: number;
}

@Table({ tableName: 'academic_modules', timestamps: false, underscored: true })
export class AcademicModule extends Model<AcademicModule, IAcademicModuleCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  lecturesNumber: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  practicalNumber: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  laboratoryNumber: number;

  @BelongsTo(() => DisciplineAcademicPlan, 'discipline_academic_plan_id')
  disciplineAcademicPlan: DisciplineAcademicPlan;

  @ForeignKey(() => DisciplineAcademicPlan)
  @Column({ type: DataType.INTEGER, allowNull: false })
  disciplineAcademicPlanId: number;

  @HasMany(() => Task, 'academic_module_id')
  tasks: Task[];
}
