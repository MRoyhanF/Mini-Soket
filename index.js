import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Server } from "socket.io";

import api from "./routes/api.js";

const app = express();
const server = createServer(app);
export const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.use(express.json());

app.use("/api", api);

io.on("connection", (socket) => {
  // catch message from client side
  socket.on("true", (msg) => {
    // send message to client side
    io.emit("true", msg);
    // console.log("message: " + msg);
  });
  socket.on("false", (msg) => {
    io.emit("false", msg);
    // console.log("message: " + msg);
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
