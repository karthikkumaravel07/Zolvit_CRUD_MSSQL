const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Task = require('../models/task');


router.use(bodyParser.json());

router.post('/task/create', async (req, res) => {
  try {
    console.log("CREATE")
    const {id,description, completed} = req.body;
    const newTask = await Task.create({id, description, completed});
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/tasks', async (req, res) => {
  try {
   
    const users = await Task.findAll();
   
    res.json(users);
  } catch (error) {
   
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});



router.patch('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;
  const { description , completed } = req.body;

  try {
    const task = await Task.findByPk(taskId);
    if (!task) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (description) {
      task.description= description ;
    }
    if (completed) {
      task.completed = completed;
    }
    await task.save();
    res.json({ message: 'task updated successfully' });
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Failed to update task'});
  }
});

router.delete('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findByPk(taskId);
    if (!task) {
      return res.status(404).json({ error: 'task not found' });
    }

    await task.destroy();

    res.json({ message: 'task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Failed to delete task' });
  }
});


module.exports = router