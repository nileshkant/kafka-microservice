import { Kafka } from "kafkajs";
import * as dotenv from "dotenv";

dotenv.config();

const kafka = new Kafka({
  clientId: "express-producer",
  brokers: [
    "kafka-0.kafka.default.svc.cluster.local:9092",
    "kafka-1.kafka.default.svc.cluster.local:9092",
    "kafka-2.kafka.default.svc.cluster.local:9092",
  ],
});

export const producer = kafka.producer();

export const consumer = kafka.consumer({ groupId: "test-group" });
