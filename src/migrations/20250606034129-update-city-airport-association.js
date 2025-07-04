'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports',{
      type:'foreign key',
      fields:['cityId'],
      name:'city_fkey_constraint',
      references:{
        table:'Cities',
        field:'id'
      },
      // onUpdate:'CASCADE',
      onDelete:'CASCADE'
    });
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports','city_fkey_constraint',{

    })
  }
};