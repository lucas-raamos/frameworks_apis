'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuariosSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.string('email', 80).notNullable().unique()
      table.string('username', 254).notNullable()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
}
  down () {
    this.drop('usuarios')
  }
}

module.exports = UsuariosSchema
