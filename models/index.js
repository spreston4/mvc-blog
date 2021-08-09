const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// User has many posts, posts belong to one user
User.hasMany(Post, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// User has many comments, comments belong to one user
User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

// Posts have many comments, comments belong to one post
Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };