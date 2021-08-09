const router = require('express').Router();

// Require User, Post, Comment
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./commentRoutes');

// Route to Users, Posts, Comments
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;