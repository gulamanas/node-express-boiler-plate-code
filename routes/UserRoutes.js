const express = require('express');
const router = express.Router();
const { signupUser, loginUser } = require('../controllers/UserController');

router.post('/login', loginUser);

router.post('/signup', signupUser);

router.post('/signout', (req, res) => {
    res.json({ message: 'Signout successful' });
});

module.exports = router;