import { Table, Column, Model } from "sequelize-typescript";

@Table({ tableName: "recruiters" })
export class Recruiter extends Model {

  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ allowNull: false })
  companyName!: string;

  @Column({ allowNull: false, unique: true })
  email!: string;

  @Column({ allowNull: false })
  password!: string;

  @Column({})
  contactPerson!: string;

  @Column({})
  phone!: string;

  @Column({})
  companyWebsite!: string;

  @Column({ defaultValue: false })
  isVerified!: boolean;
}