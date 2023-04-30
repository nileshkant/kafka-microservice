import express from "express";
import { sendUserRegistrationEvent } from "../kafka/producers/userRegistrationProducer";

const router = express.Router();

router.post("/register", async (req, res) => {
  const user = {
    id: req.body.id,
    name: req.body.name,
  };

  // Save user to the database here.

  // Send user registration event
  await sendUserRegistrationEvent(user);

  res.status(201).json({ message: "User registered successfully." });
});

export default router;
