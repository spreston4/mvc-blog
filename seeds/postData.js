const { Post } = require('../models');

const postData = [
    {
        title: 'Post 1',
        content: 'Content 1',
        user_id: 1,
    },
    {
        title: 'Post 2',
        content: 'Content 2',
        user_id: 2,
    },
    {
        title: 'Post 3',
        content: 'Content 3',
        user_id: 3,
    },
    {
        title: 'Post 4',
        content: 'Content 4',
        user_id: 1,
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;