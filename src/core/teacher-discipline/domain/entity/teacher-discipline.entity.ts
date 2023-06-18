import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { DisciplineAcademicPlan } from 'src/core/discipline-academic-plan/domain/entity/discipline-academic-plan.entity';
import { Teacher } from 'src/core/teacher/domain/entity/teacher.entity';
import { ClassType } from '../types/class-type.type';

interface ITeacherDisciplineCreationAttrs {
  id: number;
  classType: ClassType;
  teacherId: number;
  disciplineAcademicPlanId: number;
}

@Table({ tableName: 'teacher_disciplines', timestamps: false, underscored: true })
export class TeacherDiscipline extends Model<TeacherDiscipline, ITeacherDisciplineCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  classType: ClassType;

  @BelongsTo(() => Teacher, 'teacher_id')
  teacher: Teacher;

  @ForeignKey(() => Teacher)
  @Column({ type: DataType.INTEGER, allowNull: false })
  teacherId: number;

  @BelongsTo(() => DisciplineAcademicPlan, 'discipline_academic_plan_id')
  disciplineAcademicPlan: DisciplineAcademicPlan;

  @ForeignKey(() => DisciplineAcademicPlan)
  @Column({ type: DataType.INTEGER, allowNull: false })
  disciplineAcademicPlanId: number;
}
