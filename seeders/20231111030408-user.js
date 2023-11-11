'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        "name": "andi",
        "email": "andi@gmail.com",
        "username": "andi30",
        "password": "1234"
      },
      {
        "name": "archie",
        "email": "archie@gmail.com",
        "username": "archie1",
        "password": "123"
      },
      {
        "name": "nopal",
        "email": "nopal@gmail.com",
        "username": "nopal2",
        "password": "123"
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
