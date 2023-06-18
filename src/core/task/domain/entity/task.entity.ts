import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { AcademicModule } from 'src/core/academic-module/domain/entity/academic-module.entity';
import { Grade } from 'src/core/grade/domain/entity/grade.entity';

interface ITaskCreationAttrs {
  id: number;
  topic: string;
  description: string;
  isObligatory: boolean;
  lecturesNumber: number;
  practicalNumber: number;
  laboratoryNumber: number;
  academicModuleId: number;
}

@Table({ tableName: 'tasks', timestamps: false, underscored: true })
export class Task extends Model<Task, ITaskCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  topic: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  isObligatory: boolean;

  @Column({ type: DataType.INTEGER, allowNull: false })
  lecturesNumber: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  practicalNumber: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  laboratoryNumber: number;

  @BelongsTo(() => AcademicModule, 'academic_module_id')
  academicModule: AcademicModule;

  @ForeignKey(() => AcademicModule)
  @Column({ type: DataType.INTEGER, allowNull: false })
  academicModuleId: number;

  @HasMany(() => Grade, 'task_id')
  grades: Grade[];
}
