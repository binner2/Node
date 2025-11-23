import express from 'express';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = express.Router();

/* GET users listing. */
router.get(
  '/',
  asyncHandler(async (req, res) => {
    // Example async operation (simulating database query)
    const users = await Promise.resolve([
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
    ]);
    res.json(users);
  })
);

export default router;
