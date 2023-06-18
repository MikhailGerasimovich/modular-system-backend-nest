import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { DisciplineAcademicPlan } from 'src/core/discipline-academic-plan/domain/entity/discipline-academic-plan.entity';

interface IDisciplineCreationAttrs {
  id: number;
  title: string;
  shortTitle: string;
}

@Table({ tableName: 'disciplines', timestamps: false, underscored: true })
export class Discipline extends Model<Discipline, IDisciplineCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  shortTitle: string;

  @HasMany(() => DisciplineAcademicPlan, 'discipline_id')
  disciplineAcademicPlans: DisciplineAcademicPlan[];
}
