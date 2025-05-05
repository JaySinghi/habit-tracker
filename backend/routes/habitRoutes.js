import express from 'express';
import { 
  getHabits, 
  createHabit, 
  updateHabit, 
  deleteHabit, 
  getHabitById 
} from '../controllers/habitController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, getHabits)
  .post(protect, createHabit);

router.route('/:id')
  .get(protect, getHabitById)
  .delete(protect, deleteHabit)
  .put(protect, updateHabit);

export default router;