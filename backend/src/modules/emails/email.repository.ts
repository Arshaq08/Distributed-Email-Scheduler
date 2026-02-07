import { prisma } from "../../config/db";

export const EmailRepository = {
  create: (data: any) =>
    prisma.email.create({ data }),

  findById: (id: string) =>
    prisma.email.findUnique({ where: { id } }),

  updateJobId: (id: string, jobId: string) =>
    prisma.email.update({
      where: { id },
      data: { jobId },
    }),

  markSent: (id: string) =>
    prisma.email.update({
      where: { id },
      data: { status: "sent", sentAt: new Date() },
    }),

  listByStatus: (status: string) =>
    prisma.email.findMany({
      where: { status },
      orderBy: { scheduledAt: "asc" },
    }),
};
