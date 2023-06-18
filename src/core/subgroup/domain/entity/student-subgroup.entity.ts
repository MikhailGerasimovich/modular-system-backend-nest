import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Student } from 'src/core/student/domain/entity/student.entity';
import { Subgroup } from './subgroup.entity';

interface IStudentSubgroupCreationAttrs {
  id: number;
  studentId: number;
  subgroupId: number;
}

@Table({ tableName: 'student_subgroups', timestamps: false, underscored: true })
export class StudentSubgroup extends Model<StudentSubgroup, IStudentSubgroupCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Student)
  @Column({ type: DataType.INTEGER, allowNull: false })
  studentId: string;

  @ForeignKey(() => Subgroup)
  @Column({ type: DataType.INTEGER, allowNull: false })
  subgroupId: number;
}
