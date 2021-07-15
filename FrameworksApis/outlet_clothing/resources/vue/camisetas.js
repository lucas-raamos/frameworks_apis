
  Vue.component('tabela-camisetas',{
    props:['lista'],
    template: '<table>\
    <tr>\
        <th>MARCA</th>\
        <th>TAMANHO</th>\
        <th>PRECO</th>\
        <th>QUANTIDADE</th>\
    </tr>\
    <tr v-for="item of lista">\
        <td>{{item.marca_camiseta}}</td>\
        <td>{{item.tamanho_camiseta}}</td>\
        <td>{{item.preco_camiseta}}</td>\
        <td>{{item.qtd_camiseta}}</td>\
    </tr>\
  </table>'
  })
  
  var app = new Vue({
      el: "#cadastro",
    data: {
      novoCamiseta:{},
      camisetas:[]
    },
    methods:{
      
  
      refresh: function(){
        axios
          .get('http://127.0.0.1:3333/api/camisetas')
          .then(response=>{
            this.camisetas = response.data;
            console.log("Response: ",response) 
          });
      }
    },
    created: function(){
      console.log("Iniciando...")
      this.refresh();
    }
   
  });