import express from "express";
import cors from "cors";
import emailRoutes from "./modules/emails/email.routes";

const app = express();

app.use(cors());
app.use(express.json());

// health check
app.get("/health", (_, res) => {
  res.json({ status: "OK" });
});

// email routes
app.use("/api/emails", emailRoutes);

export default app;
