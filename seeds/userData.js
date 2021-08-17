const { User } = require('../models');
const userData = require('./userData.json');

const seedUser = async () => {

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
}

module.exports = seedUser;

