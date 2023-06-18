import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';

export const databaseConfig: SequelizeModuleOptions = {
  dialect: (process.env.DB_DIALECT as Dialect) ?? 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT) ?? 3000,
  username: process.env.DB_USERNAME ?? 'postgres',
  password: process.env.DB_PASSWORD ?? '957483',
  database: process.env.DB_NAME ?? 'modular_system_db',
  models: [],
  synchronize: true,
  autoLoadModels: true,
  define: {
    timestamps: false,
  },
};
