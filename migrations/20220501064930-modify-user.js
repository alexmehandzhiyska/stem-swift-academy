'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'users', // table name
        'country', // new field name
        {
          type: Sequelize.STRING(60),
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'users',
        'city',
        {
          type: Sequelize.STRING(60),
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'users',
        'school',
        {
          type: Sequelize.STRING(150),
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'users',
        'graduation_year',
        {
          type: Sequelize.INTEGER,
          allowNull: true
        }
      )
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('users', 'country'),
      queryInterface.removeColumn('users', 'city'),
      queryInterface.removeColumn('users', 'school'),
      queryInterface.removeColumn('users', 'graduation_year'),
    ]);
  }
};
