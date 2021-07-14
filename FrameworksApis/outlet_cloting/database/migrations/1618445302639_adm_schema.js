'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdmsSchema extends Schema {
  up () {
    this.create('adms', (table) => {
      table.increments()
      table.string('email', 80).notNullable().unique()
      table.string('nome', 254).notNullable()
      table.string('senha', 60).notNullable()
      table.timestamps()
    })
}
  down () {
    this.drop('adms')
  }
}

module.exports = AdmsSchema
