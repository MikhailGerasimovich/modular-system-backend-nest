import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { AcademicPlan } from 'src/core/academic-plan/domain/entity/academic-plan.entity';
import { Subgroup } from 'src/core/subgroup/domain/entity/subgroup.entity';

interface IGroupCreationAttrs {
  id: number;
  title: string;
  academicPlanId: number;
}

@Table({ tableName: 'groups', timestamps: false, underscored: true })
export class Group extends Model<Group, IGroupCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @BelongsTo(() => AcademicPlan, 'academic_plan_id')
  academicPlan: AcademicPlan;

  @ForeignKey(() => AcademicPlan)
  @Column({ type: DataType.INTEGER, allowNull: false })
  academicPlanId: number;

  @HasMany(() => Subgroup, 'group_id')
  subgroups: Subgroup[];
}
