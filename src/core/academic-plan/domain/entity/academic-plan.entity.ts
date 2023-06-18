import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { DisciplineAcademicPlan } from 'src/core/discipline-academic-plan/domain/entity/discipline-academic-plan.entity';
import { Group } from 'src/core/group/domain/entity/group.entity';
import { Speciality } from 'src/core/speciality/domain/entity/speciality.entity';

interface IAcademicPlanCreationAttrs {
  recruitmentYear: string;
  specialityId: number;
}

@Table({ tableName: 'academic_plans', timestamps: false, underscored: true })
export class AcademicPlan extends Model<AcademicPlan, IAcademicPlanCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  recruitmentYear: string;

  @BelongsTo(() => Speciality, 'speciality_id')
  speciality: Speciality;

  @ForeignKey(() => Speciality)
  @Column({ type: DataType.INTEGER, allowNull: true })
  specialityId: number;

  @HasMany(() => Group, 'academic_plan_id')
  groups: Group[];

  @HasMany(() => Group, 'academic_plan_id')
  disciplineAcademicPlans: DisciplineAcademicPlan[];
}
