import Habit from '../models/habitModel.js';

// @desc    Get all habits
// @route   GET /api/habits
// @access  Private
export const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ user: req.user._id });
    res.status(200).json(habits);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a habit
// @route   POST /api/habits
// @access  Private
export const createHabit = async (req, res) => {
  try {
    const { name, description, frequency, goal } = req.body;
    
    const habit = new Habit({
      user: req.user._id,
      name,
      description,
      frequency,
      goal
    });

    const createdHabit = await habit.save();
    res.status(201).json(createdHabit);
  } catch (error) {
    res.status(400).json({ message: 'Invalid habit data' });
  }
};

// @desc    Update a habit
// @route   PUT /api/habits/:id
// @access  Private
export const updateHabit = async (req, res) => {
  try {
    const { name, description, frequency, goal } = req.body;

    const habit = await Habit.findById(req.params.id);

    if (habit) {
      habit.name = name || habit.name;
      habit.description = description || habit.description;
      habit.frequency = frequency || habit.frequency;
      habit.goal = goal || habit.goal;

      const updatedHabit = await habit.save();
      res.json(updatedHabit);
    } else {
      res.status(404).json({ message: 'Habit not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid habit data' });
  }
};

// @desc    Delete a habit
// @route   DELETE /api/habits/:id
// @access  Private
export const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (habit) {
      await habit.remove();
      res.json({ message: 'Habit removed' });
    } else {
      res.status(404).json({ message: 'Habit not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get habit by ID
// @route   GET /api/habits/:id
// @access  Private
export const getHabitById = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (habit) {
      res.json(habit);
    } else {
      res.status(404).json({ message: 'Habit not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};