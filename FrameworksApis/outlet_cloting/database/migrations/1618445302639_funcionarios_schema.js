'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FuncionariosSchema extends Schema {
  up () {
    this.create('funcionarios', (table) => {
      table.increments()
      table.string('nome_funcionario', 80).notNullable().unique()
      table.string('data_nasc', 254).notNullable().unique()
      table.string('endereco_funcionario', 60).notNullable().unique()
      table.string('escolaridade_funcionario',60).notNullable().unique()
      table.timestamps()
    })
}
  down () {
    this.drop('funcionarios')
  }
}

module.exports = FuncionariosSchema
