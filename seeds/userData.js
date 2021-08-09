const { User } = require('../models');

const userData = [
    {
        username: 'Sam',
        email: 'sam@email.com',
        password: 'password',
    },
    {
        username: 'Tim',
        email: 'tim@email.com',
        password: 'password',
    },
    {
        username: 'Jan',
        email: 'jan@email.com',
        password: 'password',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;