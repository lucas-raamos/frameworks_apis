'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CalcasSchema extends Schema {
  up () {
    this.create('calcas', (table) => {
      table.increments()
      table.string('marca_calca', 80).notNullable()
      table.string('tamanho_calca', 254).notNullable()
      table.string('qtd_calca', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('calcas')
  }
}

module.exports = CalcasSchema
