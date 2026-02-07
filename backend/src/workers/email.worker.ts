import { Worker } from "bullmq";
import { redisConnection } from "../config/redis";
import { prisma } from "../config/db";

const emailWorker = new Worker(
  "email-queue",
  async (job) => {
    console.log("📨 Processing job:", job.id);

    const { emailId } = job.data;

    await prisma.email.update({
      where: { id: emailId },
      data: {
        status: "sent",
        sentAt: new Date(),
      },
    });

    console.log("✅ Email marked as sent:", emailId);
  },
  {
    connection: redisConnection,
    concurrency: Number(process.env.WORKER_CONCURRENCY || 5),
  }
);

console.log("👷 Email worker started");
