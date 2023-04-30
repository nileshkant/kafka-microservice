// src/index.ts
import "reflect-metadata";
import express from "express";
import AppDataSource from "./config/typeorm-config";
import cookieParser from "cookie-parser";
import logger from "./logger";

AppDataSource.initialize()
  .then(() => {
    logger.info("Connected to the database");

    const app = express();

    app.use(express.json());
    app.use(cookieParser());

    app.get("/welcome", (req, res) => {
      res.send("Hello World!");
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      logger.info(`Combined service running on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger.error("Error connecting to the database:", error);
  });
