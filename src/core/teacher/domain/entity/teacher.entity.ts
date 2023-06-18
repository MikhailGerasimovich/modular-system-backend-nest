import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Department } from 'src/core/department/domain/entity/department.entity';
import { TeacherDiscipline } from 'src/core/teacher-discipline/domain/entity/teacher-discipline.entity';

interface ITeacherCreationAttrs {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  departmentId: number;
}

@Table({ tableName: 'teachers', timestamps: false, underscored: true })
export class Teacher extends Model<Teacher, ITeacherCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  surname: string;

  @Column({ type: DataType.STRING, allowNull: false })
  patronymic: string;

  @BelongsTo(() => Department, 'department_id')
  deprtment: Department;

  @ForeignKey(() => Department)
  @Column({ type: DataType.INTEGER, allowNull: false })
  departmentId: number;

  @HasMany(() => TeacherDiscipline, 'teacher_id')
  teacherDisciplines: TeacherDiscipline[];
}
