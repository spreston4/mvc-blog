const { Comment } = require('../models');

const commentData = [
    {
        content: 'Comment 1',
        post_id: 1,
        user_id: 2,
    },
    {
        content: 'Comment 2',
        post_id: 1,
        user_id: 3,
    },
    {
        content: 'Comment 3',
        post_id: 2,
        user_id: 1,
    },
    {
        content: 'Comment 4',
        post_id: 2,
        user_id: 2,
    },
    {
        content: 'Comment 5',
        post_id: 3,
        user_id: 3,
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;