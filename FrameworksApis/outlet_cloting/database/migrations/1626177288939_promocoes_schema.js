'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PromocoesSchema extends Schema {
  up () {
    this.create('promocoes', (table) => {
      table.increments()
      table.string('nome_cliente', 80).notNullable()
      table.string('email_cliente', 254).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('promocoes')
  }
}

module.exports = PromocoesSchema
