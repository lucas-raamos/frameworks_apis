Vue.component('tabela-funcionarios', {
    props: ['funcionarios'],
    template: '<table>\
    <tr>\
        <th>NOME</th>\
        <th>DATA DE NASCIMENTO</th>\
        <th>ENDEREÇO</th>\
        <th>ESCOLARIDADE</th>\
    </tr>\
    <tr v-for="funcionario of funcionarios">\
        <td>{{funcionarios.nome_funcionario}}</td>\
        <td>{{funcionarios.data_nasc}}</td>\
        <td>{{funcionarios.endereco_funcionario}}</td>\
        <td>{{funcionarios.escolaridade_funcionario}}</td>\
    </tr>\
  </table>'
  });
  