import asyncHandler from 'express-async-handler';

// @desc    GET 'Hello'
// @route   GET /api/examples
// @access  Public
const sayHello = asyncHandler(async (req, res) => {
  res.json('Hello');
});

export { sayHello };
