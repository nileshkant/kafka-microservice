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

// const consume = async () => {
//   await consumer.connect();
//   await consumer.subscribe({ topic: "test" });

//   await consumer.run({
//     eachMessage: async ({ topic, partition, message }) => {
//       console.log(
//         `Received message: key = ${message.key?.toString()}, value = ${message.value?.toString()}`
//       );
//     },
//   });
// };

// consume().catch(console.error);

const consumer = kafka.consumer({ groupId: "test-group" });
