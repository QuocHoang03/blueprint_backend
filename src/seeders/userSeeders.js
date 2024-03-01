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
      "User",
      [
        {
          lastName: "fake",
          firstName: "1",
          email: "fake1@gmail.com",
          password: "111111",
          address: "Quảng Ngãi",
          phone: "011111111",
          sex: "male",
          groupId: 1,
        },
        {
          lastName: "fake",
          firstName: "2",
          email: "fake2@gmail.com",
          password: "111111",
          address: "Quảng Nam",
          phone: "022222222",
          sex: "male",
          groupId: 2,
        },
        {
          lastName: "fake",
          firstName: "3",
          email: "fake3@gmail.com",
          password: "111111",
          address: "Huế",
          phone: "033333333",
          sex: "male",
          groupId: 3,
        },
        {
          lastName: "fake",
          firstName: "4",
          email: "fake4@gmail.com",
          password: "111111",
          address: "Quảng Trị",
          phone: "044444444",
          sex: "male",
          groupId: 1,
        },
        {
          lastName: "fake",
          firstName: "5",
          email: "fake5@gmail.com",
          password: "111111",
          address: "Quảng Bình",
          phone: "055555555",
          sex: "male",
          groupId: 2,
        },
        {
          lastName: "fake",
          firstName: "6",
          email: "fake6@gmail.com",
          password: "111111",
          address: "Quảng Ngãi",
          phone: "066666666",
          sex: "male",
          groupId: 3,
        },
        {
          lastName: "fake",
          firstName: "7",
          email: "fake7@gmail.com",
          password: "111111",
          address: "Quảng Nam",
          phone: "077777777",
          sex: "male",
          groupId: 2,
        },
        {
          lastName: "fake",
          firstName: "8",
          email: "fake8@gmail.com",
          password: "111111",
          address: "Quảng Trị",
          phone: "088888888",
          sex: "male",
          groupId: 1,
        },
        {
          lastName: "fake",
          firstName: "9",
          email: "fake9@gmail.com",
          password: "111111",
          address: "Sài Gòn",
          phone: "099999999",
          sex: "male",
          groupId: 3,
        },
        {
          lastName: "fake",
          firstName: "10",
          email: "fake10@gmail.com",
          password: "111111",
          address: "Quảng Ninh",
          phone: "010101010",
          sex: "male",
          groupId: 2,
        },
        {
          lastName: "fake",
          firstName: " 11",
          email: "fake11@gmail.com",
          password: "111111",
          address: "Quảng Ngãi",
          phone: "011111111",
          sex: "male",
          groupId: 1,
        },
        {
          lastName: "fake",
          firstName: " 12",
          email: "fake12@gmail.com",
          password: "111111",
          address: "Quảng Ngãi",
          phone: "012121212",
          sex: "male",
          groupId: 3,
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
