'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CamisetasSchema extends Schema {
  up () {
    this.create('camisetas', (table) => {
      table.increments()
      table.string('marca_camiseta', 80).notNullable()
      table.string('tamanho_camiseta', 254).notNullable()
      table.string('preco_camiseta', 254).notNullable()
      table.string('qtd_camiseta', 60).notNullable()
      table.timestamps()
    })
}
  down () {
    this.drop('camisetas')
  }
}

module.exports = CamisetasSchema
