import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './user.entity';
import { Role } from 'src/core/role/domain/entity/role.entity';

interface IUserRoleCreationAttrs {
  id: number;
  userId: number;
  roleId: number;
}

@Table({ tableName: 'user_roles', timestamps: false, underscored: true })
export class UserRole extends Model<UserRole, IUserRoleCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER, allowNull: false })
  roleId: number;
}
