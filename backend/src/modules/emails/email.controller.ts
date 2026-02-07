import { Request, Response } from "express";
import { EmailService } from "./email.service";

export const scheduleEmail = async (req: Request, res: Response) => {
  const { senderEmail, recipientEmail, subject, body, scheduledAt } = req.body;

  if (!senderEmail || !recipientEmail || !subject || !body || !scheduledAt) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const email = await EmailService.scheduleEmail({
    senderEmail,
    recipientEmail,
    subject,
    body,
    scheduledAt,
  });

  res.json({ success: true, email });
};
