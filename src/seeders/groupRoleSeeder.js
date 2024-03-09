"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "Group_Role",
      [
        {
          groupId: 3,
          roleId: 1,
        },
        {
          groupId: 3,
          roleId: 2,
        },
        {
          groupId: 3,
          roleId: 3,
        },
        {
          groupId: 3,
          roleId: 4,
        },
        {
          groupId: 2,
          roleId: 1,
        },
        {
          groupId: 2,
          roleId: 2,
        },
        {
          groupId: 2,
          roleId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
