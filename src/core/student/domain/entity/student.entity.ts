import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Grade } from 'src/core/grade/domain/entity/grade.entity';
import { StudentSubgroup } from 'src/core/subgroup/domain/entity/student-subgroup.entity';
import { Subgroup } from 'src/core/subgroup/domain/entity/subgroup.entity';

interface IStudentCreationAttrs {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  code: string;
}

@Table({ tableName: 'students', timestamps: false, underscored: true })
export class Student extends Model<Student, IStudentCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  surname: string;

  @Column({ type: DataType.STRING, allowNull: false })
  patronymic: string;

  @Column({ type: DataType.STRING, allowNull: false })
  code: string;

  @BelongsToMany(() => Subgroup, () => StudentSubgroup, 'student_id', 'subgroup_id')
  subgroups: Subgroup[];

  @HasMany(() => Grade, 'student_id')
  grades: Grade[];
}
