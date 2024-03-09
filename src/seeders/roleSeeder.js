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
      "Role",
      [
        {
          url: "/read/user",
          description: "Lấy ra User",
        },
        {
          url: "/create/user",
          description: "Tạo User",
        },
        {
          url: "/update/user",
          description: "Cập nhật User",
        },
        {
          url: "/delete/user",
          description: "Xoá User",
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
