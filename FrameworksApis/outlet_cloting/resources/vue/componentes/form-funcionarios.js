Vue.component('form-funcionarios',{
    props:['funcionario'],
    methods:{
      salvarFuncionario: function() {
        this.$emit('salvar',{funcionario: this.funcionario});
      },
      limpar: function(){
        this.funcionario={};
      }
    },
    template: '\
        <div id="form">\
          <label for="nome_funcionario">Nome:</label>\
          <input id="nome_funcionario" v-model="funcionario.nome_funcionario"><br>\
          \
          <label for="data_nasc">Data de Nascimento</label>\
          <input id="data_nasc" v-model="funcionario.data_nasc"><br>\
          \
          <label for="endereco_funcionario">Endereço</label>\
          <input id="endereco_funcionario" v-model="funcionario.endereco_funcionario"><br>\
          \
          <label for="escolaridade_funcionario">Escolaridade:</label>\
          <input id="escolaridade_funcionario" v-model="funcionario.escolaridade_funcionario"><br>\
          \
          <div id="botoes">\
            <button v-on:click="salvarFuncionario">Adicionar Funcionario</button>\
            <button @click="limpar">Limpar</button>\
          </div>\
        </div>\
        '
  })
  