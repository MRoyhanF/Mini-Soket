import { io } from "../index.js";

export const messageCtrl = (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      throw new Error("Respon Error || Message is required");
    }

    // send message to client side
    io.emit("true", "Respon Success || Message sent");
    res.send("Success sent");
  } catch (error) {
    // send message to client side
    io.emit("false", error.message);
    res.send("Failed sent");
  }
};
