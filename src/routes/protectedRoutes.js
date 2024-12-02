const express = require('express');
const { getProfile } = require('../controllers/protectedController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

// Protected route
router.get('/profile', authenticateJWT, getProfile);

module.exports = router;
