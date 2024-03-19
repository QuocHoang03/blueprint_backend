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
      "Category",
      [
        {
          name: "Nhà cấp 4",
          description: "Nhà cấp 4",
        },
        {
          name: "Nhà phố",
          description: "Nhà phố",
        },
        {
          name: "Biệt thự",
          description: "Biệt thự",
        },
        {
          name: "Khách sạn",
          description: "Khách sạn",
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
