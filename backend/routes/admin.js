const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// All admin routes require authentication and admin role
router.use(auth);
router.use(admin);

// Admin dashboard stats
router.get('/stats', (req, res) => {
  res.json({
    success: true,
    data: {
      totalUsers: 0,
      totalItems: 0,
      totalSwaps: 0,
      pendingApprovals: 0
    }
  });
});

// Get all users (admin only)
router.get('/users', (req, res) => {
  res.json({
    success: true,
    data: []
  });
});

// Get all items (admin only)
router.get('/items', (req, res) => {
  res.json({
    success: true,
    data: []
  });
});

// Get all swaps (admin only)
router.get('/swaps', (req, res) => {
  res.json({
    success: true,
    data: []
  });
});

module.exports = router; 