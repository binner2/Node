import express from 'express';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = express.Router();

/* GET home page. */
router.get(
  '/',
  asyncHandler(async (req, res) => {
    // Example async operation (simulating database call)
    const title = await Promise.resolve('nodeprogramlama.com');
    res.render('index', { title });
  })
);

export default router;
