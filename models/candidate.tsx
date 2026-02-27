import { Table, Column, Model, DataType } from "sequelize-typescript";
import { HasMany } from "sequelize-typescript";

@Table({ tableName: "candidates" })
export class Candidate extends Model {

  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ allowNull: false })
  firstName!: string;

  @Column({})
  lastName!: string;

  @Column({ allowNull: false, unique: true, validate: { isEmail: true } })
  email!: string;

  @Column({ allowNull: false })
  password!: string;

  @Column({ allowNull: false })
  phone!: string;

  @Column({ defaultValue: false })
  isVerified!: boolean;
}