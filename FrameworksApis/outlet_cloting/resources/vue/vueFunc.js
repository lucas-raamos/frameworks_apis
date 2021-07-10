var app = new Vue({
	el: "#cadastro",
  data: {
    listaFuncionarios: [],
    novoFuncionario: {}
  },
  methods:{
    addFuncionario: function() {
      this.listaFuncionarios.push(this.novoFuncionario);
      this.novoFuncionario = {};
    }
  }
});