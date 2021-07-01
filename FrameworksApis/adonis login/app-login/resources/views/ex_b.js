var app = new Vue({
	el: "#cadastro",
  data: {
    listaFunc: [],
    funcionarios: {}
  },
  methods:{
    addFunc: function() {
      this.listaFunc.push(this.funcionarios);
      this.limpar();
    },
    limpar: function() { 
      this.funcionarios = {};
    }
  }
});