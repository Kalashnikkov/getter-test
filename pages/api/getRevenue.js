import { revenueThisWeek } from "../../src/data";

export default function handler(req, res) {
    // Don't need a request - keep it simple. Would like to authenticate a user is able to retrieve data
    try {
        res.status(200).json({revenueThisWeek})
    } catch (err) {
        res.status(500).json({error: 'Failed to retreieve revenue.'})
    }
  }
  