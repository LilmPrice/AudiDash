import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({
    appointments: 155,
    patients: 312,
    claimsPending: 8,
    invoices: 27
  });
});

export default router;