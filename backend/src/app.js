import express from "express";
import aiRoutes from "./routes/ai.routes.js";

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/ai", aiRoutes);

export default app;
