import { producer } from "../kafka";
import * as dotenv from "dotenv";

dotenv.config();

// const producer = createKafkaProducer(
//   process.env.KAFKA_CLIENT_ID!,
//   process.env.KAFKA_BROKERS!.split(",")
// );

export async function sendUserRegistrationEvent(user: {
  id: number;
  name: string;
}) {
  await producer.connect();
  await producer.send({
    topic: "test",
    messages: [{ value: JSON.stringify(user) }],
  });
  await producer.disconnect();
}
