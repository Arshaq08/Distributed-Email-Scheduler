import { Router } from "express";
import { scheduleEmail } from "./email.controller";

const router = Router();

router.post("/schedule", scheduleEmail);

export default router;
