import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Student } from 'src/core/student/domain/entity/student.entity';
import { Task } from 'src/core/task/domain/entity/task.entity';

interface IGradeCreationAttrs {
  id: number;
  value: number;
  studentId: number;
  taskId: number;
}

@Table({ tableName: 'grades', timestamps: false, underscored: true })
export class Grade extends Model<Grade, IGradeCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.DOUBLE, allowNull: false })
  value: number;

  @BelongsTo(() => Student, 'student_id')
  student: Student;

  @ForeignKey(() => Student)
  @Column({ type: DataType.INTEGER, allowNull: false })
  studentId: number;

  @BelongsTo(() => Task, 'task_id')
  task: Task;

  @ForeignKey(() => Task)
  @Column({ type: DataType.INTEGER, allowNull: false })
  taskId: number;
}
