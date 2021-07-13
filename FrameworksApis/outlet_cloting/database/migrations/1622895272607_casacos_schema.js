'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CasacosSchema extends Schema {
  up () {
    this.create('casacos', (table) => {
      table.increments()
      table.string('marca_casaco', 80).notNullable()
      table.string('tamanho_casaco', 254).notNullable()
      table.string('qtd_casaco', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('casacos')
  }
}

module.exports = CasacosSchema
