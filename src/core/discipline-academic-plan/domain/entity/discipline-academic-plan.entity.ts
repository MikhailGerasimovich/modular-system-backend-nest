import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { AcademicModule } from 'src/core/academic-module/domain/entity/academic-module.entity';
import { AcademicPlan } from 'src/core/academic-plan/domain/entity/academic-plan.entity';
import { Department } from 'src/core/department/domain/entity/department.entity';
import { Discipline } from 'src/core/discipline/domain/entity/discipline.entity';
import { TeacherDiscipline } from 'src/core/teacher-discipline/domain/entity/teacher-discipline.entity';
import { ControlForm } from '../types/control-form.type';

interface IDisciplineAcademicPlanCreationAttrs {
  id: number;
  semester: number;
  lecturesNumber: number;
  practicalNumber: number;
  laboratoryNumber: number;
  controlForm: ControlForm;
  disciplineId: number;
  departmentId: number;
  academicPlanId: number;
}

@Table({ tableName: 'discipline_academic_plans', timestamps: false, underscored: true })
export class DisciplineAcademicPlan extends Model<DisciplineAcademicPlan, IDisciplineAcademicPlanCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  semester: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  lecturesNumber: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  practicalNumber: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  laboratoryNumber: number;

  @Column({ type: DataType.STRING, allowNull: false })
  controlForm: ControlForm;

  @BelongsTo(() => Discipline, 'discipline_id')
  discipline: Discipline;

  @ForeignKey(() => Discipline)
  @Column({ type: DataType.INTEGER, allowNull: false })
  disciplineId: number;

  @BelongsTo(() => Department, 'department_id')
  deprtment: Department;

  @ForeignKey(() => Department)
  @Column({ type: DataType.INTEGER, allowNull: false })
  departmentId: number;

  @BelongsTo(() => AcademicPlan, 'academic_plan_id')
  academicPlan: AcademicPlan;

  @ForeignKey(() => AcademicPlan)
  @Column({ type: DataType.INTEGER, allowNull: false })
  academicPlanId: number;

  @HasMany(() => AcademicModule, 'discipline_academic_plan_id')
  academicModules: AcademicModule[];

  @HasMany(() => TeacherDiscipline, 'discipline_academic_plan_id')
  teacherDisciplines: TeacherDiscipline[];
}
