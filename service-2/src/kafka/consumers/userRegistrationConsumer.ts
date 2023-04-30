import { consumer } from "../kafka";
import * as dotenv from "dotenv";

dotenv.config();

// const consumer = createKafkaConsumer(
//   process.env.KAFKA_CLIENT_ID!,
//   process.env.KAFKA_BROKERS!.split(","),
//   process.env.KAFKA_CONSUMER_GROUP_ID!
// );

export async function startUserRegistrationConsumer() {
  try {
    await consumer.connect();
    await consumer.subscribe({
      topic: "user-registration",
      fromBeginning: true,
    });

    consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const user = JSON.parse(message.value!.toString());
        console.log(
          `Received user registration event: ${JSON.stringify(user)}`
        );
        // Process the user registration event here.
      },
    });
  } catch (error) {
    console.error("Error in startUserRegistrationConsumer:", error);
  }
}
