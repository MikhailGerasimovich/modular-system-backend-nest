import { SequelizeTypescriptMigration } from 'sequelize-typescript-migration-lts';
import { Sequelize } from 'sequelize-typescript';
import { join } from 'path';
import { Dialect } from 'sequelize';
import { Speciality } from 'src/core/speciality/domain/entity/speciality.entity';
import { config } from 'dotenv';
import { AcademicPlan } from 'src/core/academic-plan/domain/entity/academic-plan.entity';
import { Group } from 'src/core/group/domain/entity/group.entity';
import { Discipline } from 'src/core/discipline/domain/entity/discipline.entity';
import { Student } from 'src/core/student/domain/entity/student.entity';
import { Subgroup } from 'src/core/subgroup/domain/entity/subgroup.entity';
import { StudentSubgroup } from 'src/core/subgroup/domain/entity/student-subgroup.entity';
import { Department } from 'src/core/department/domain/entity/department.entity';
import { Teacher } from 'src/core/teacher/domain/entity/teacher.entity';
import { DisciplineAcademicPlan } from 'src/core/discipline-academic-plan/domain/entity/discipline-academic-plan.entity';
import { AcademicModule } from 'src/core/academic-module/domain/entity/academic-module.entity';
import { Task } from 'src/core/task/domain/entity/task.entity';
import { Grade } from 'src/core/grade/domain/entity/grade.entity';
import { Role } from 'src/core/role/domain/entity/role.entity';
import { TeacherDiscipline } from 'src/core/teacher-discipline/domain/entity/teacher-discipline.entity';
import { User } from 'src/core/user/domain/entity/user.entity';
import { UserRole } from 'src/core/user/domain/entity/user-role.entity';
config();

const bootstrap = async () => {
  const sequelize: Sequelize = new Sequelize({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number.parseInt(process.env.DB_PORT, 5432),
    dialect: process.env.DB_DIALECT as Dialect,
    models: [
      Speciality,
      AcademicPlan,
      Group,
      Discipline,
      User,
      Student,
      Subgroup,
      Department,
      Teacher,
      DisciplineAcademicPlan,
      AcademicModule,
      Task,
      Grade,
      Role,
      TeacherDiscipline,
      StudentSubgroup,
      UserRole,
    ],
    logging: false,
    define: {
      timestamps: false,
    },
  });
  try {
    const result = await SequelizeTypescriptMigration.makeMigration(sequelize, {
      outDir: join(__dirname, './db/migrations'),
      migrationName: 'init',
      useSnakeCase: true,
    });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

bootstrap();
