import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { UserRole } from 'src/core/user/domain/entity/user-role.entity';
import { User } from 'src/core/user/domain/entity/user.entity';

interface IRoleCreationAttrs {
  id: number;
  title: string;
}

@Table({ tableName: 'roles', timestamps: false, underscored: true })
export class Role extends Model<Role, IRoleCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @BelongsToMany(() => User, () => UserRole, 'role_id', 'user_id')
  users: User[];
}
