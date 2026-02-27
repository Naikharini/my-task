import { Sequelize } from "sequelize-typescript";
import { Candidate } from "./candidate";
import { Recruiter } from "./recruiter";

const sequelize = new Sequelize({
  database: process.env.DB_NAME || "database",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST || "localhost",
  dialect: "postgres",
  models: [Candidate, Recruiter],
});

export const dbInit = async () => {
  await sequelize.sync({ alter: true });
};