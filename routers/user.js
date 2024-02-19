// routes/users.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../models/user');

router.use(bodyParser.json());

router.post('/user/create', async (req, res) => {
  try {
    console.log("CREATE")
    const {id, firstName, lastName, age} = req.body;
    const newUser = await User.create({ id, firstName, lastName, age });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


  router.get('/users', async (req, res) => {
    try {
     
      const users = await User.findAll();
     
      res.json(users);
    } catch (error) {
     
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });



  router.patch('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const { firstName, lastName } = req.body;
  
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      if (firstName) {
        user.firstName = firstName;
      }
      if (lastName) {
        user.lastName = lastName;
      }
      await user.save();
      res.json({ message: 'User updated successfully' });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Failed to update user'});
    }
  });



  router.delete('/users/:id', async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      await user.destroy();

      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  });


module.exports = router;
