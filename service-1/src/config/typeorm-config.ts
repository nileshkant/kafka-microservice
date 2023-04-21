import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "postgres-1",
  port: 5432,
  username: "service1user",
  password: "service1pass",
  database: "service1db",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: [],
});

export default AppDataSource;
