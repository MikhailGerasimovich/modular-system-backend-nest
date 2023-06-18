import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { AcademicPlan } from 'src/core/academic-plan/domain/entity/academic-plan.entity';

interface ISpecialityCreationAttrs {
  id: number;
  title: string;
  shortTitle: string;
}

@Table({ tableName: 'specialties', timestamps: false, underscored: true })
export class Speciality extends Model<Speciality, ISpecialityCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  shortTitle: string;

  @HasMany(() => AcademicPlan, 'speciality_id')
  academicPlans: AcademicPlan[];
}
