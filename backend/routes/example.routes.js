import express from 'express';
const router = express.Router();

import { sayHello } from '../controllers/example.controllers.js';

// @desc    GET 'Hello'
// @route   GET /api/examples
// @access  Public
router.route('/').get(sayHello);

export default router;
