import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  database: "curatal",
  username: "postgres",
  password: "postgres",
  host: "localhost",
  dialect: "postgres",
  logging: false,
});