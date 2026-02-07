import { EmailRepository } from "./email.repository";
import { emailQueue } from "../../config/queue";

export const EmailService = {
  scheduleEmail: async (payload: any) => {
    const email = await EmailRepository.create({
      senderEmail: payload.senderEmail,
      recipientEmail: payload.recipientEmail,
      subject: payload.subject,
      body: payload.body,
      scheduledAt: new Date(payload.scheduledAt),
      status: "scheduled",
    });

    const delay =
      new Date(payload.scheduledAt).getTime() - Date.now();

    const job = await emailQueue.add(
      "send-email",
      { emailId: email.id },
      { delay }
    );

    await EmailRepository.updateJobId(email.id, job.id!);

    return email;
  },
};
