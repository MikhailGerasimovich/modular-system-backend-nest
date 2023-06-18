import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Group } from 'src/core/group/domain/entity/group.entity';
import { Student } from 'src/core/student/domain/entity/student.entity';
import { StudentSubgroup } from './student-subgroup.entity';

interface ISubgroupCreationAttrs {
  id: number;
  title: string;
  groupId: number;
}

@Table({ tableName: 'subgroups', timestamps: false, underscored: true })
export class Subgroup extends Model<Subgroup, ISubgroupCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @BelongsTo(() => Group, 'group_id')
  group: Group;

  @ForeignKey(() => Group)
  @Column({ type: DataType.INTEGER, allowNull: false })
  groupId: number;

  @BelongsToMany(() => Student, () => StudentSubgroup, 'subgroup_id', 'student_id')
  students: Student[];
}
