import { orders, revenueThisWeek } from "../../src/data";

export default function handler(req, res) {
    res.status(200).json({orders, revenueThisWeek})
  }
  