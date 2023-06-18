import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { UserRole } from './user-role.entity';
import { Role } from 'src/core/role/domain/entity/role.entity';

interface IUserCreationAttrs {
  id: number;
  login: string;
  password: string;
}

@Table({ tableName: 'users', timestamps: false, underscored: true })
export class User extends Model<User, IUserCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  login: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @BelongsToMany(() => Role, () => UserRole, 'user_id', 'role_id')
  roles: Role[];
}
