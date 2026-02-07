import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || "5000",

  REDIS_HOST: process.env.REDIS_HOST || "localhost",
  REDIS_PORT: Number(process.env.REDIS_PORT || 6379),

  DATABASE_URL: process.env.DATABASE_URL || "",

  WORKER_CONCURRENCY: Number(process.env.WORKER_CONCURRENCY || 5),
  MIN_DELAY_MS: Number(process.env.MIN_DELAY_MS || 2000),
  MAX_EMAILS_PER_HOUR: Number(process.env.MAX_EMAILS_PER_HOUR || 200),

  ETHEREAL_USER: process.env.ETHEREAL_USER || "",
  ETHEREAL_PASS: process.env.ETHEREAL_PASS || "",
};
