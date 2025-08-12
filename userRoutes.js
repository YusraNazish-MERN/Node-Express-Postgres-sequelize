const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/userController');

router.post('/', ctrl.createUser);      // Create
router.get('/', ctrl.getUsers);         // Read all
router.get('/:id', ctrl.getUserById);  // Read one
router.put('/:id', ctrl.updateUser);   // Update
router.delete('/:id', ctrl.deleteUser);// Delete

module.exports = router;
