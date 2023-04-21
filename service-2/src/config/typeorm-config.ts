import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "postgres-2",
  port: 5432,
  username: "service2user",
  password: "service2pass",
  database: "service2db",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: [],
});

export default AppDataSource;
