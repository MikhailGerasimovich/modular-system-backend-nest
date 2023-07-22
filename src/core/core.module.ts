import { Module } from '@nestjs/common';
import { SpecialityModule } from './speciality/speciality.module';
import { AcademicPlanModule } from './academic-plan/academic-plan.module';
import { GroupModule } from './group/group.module';
import { DisciplineModule } from './discipline/discipline.module';
import { StudentModule } from './student/student.module';
import { SubgroupModule } from './subgroup/subgroup.module';
import { DepartmentModule } from './department/department.module';
import { TeacherModule } from './teacher/teacher.module';
import { AcademicModuleModule } from './academic-module/academic-module.module';
import { TaskModule } from './task/task.module';
import { GradeModule } from './grade/grade.module';
import { DisciplineAcademicPlanModule } from './discipline-academic-plan/discipline_academic_plan.module';
import { RoleModule } from './role/reole.module';
import { TeacherDisciplineModule } from './teacher-discipline/teacher-discipline.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SpecialityModule,
    AcademicPlanModule,
    GroupModule,
    DisciplineModule,
    UserModule,
    StudentModule,
    SubgroupModule,
    DepartmentModule,
    TeacherModule,
    DisciplineAcademicPlanModule,
    AcademicModuleModule,
    TaskModule,
    GradeModule,
    RoleModule,
    TeacherDisciplineModule,
  ],
})
export class CoreModule {}
