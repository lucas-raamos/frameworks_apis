function renderTabela(funcionarios){
    var str=`
    <h3>Tabela de Funcionarios</h3>
    <div id="tabela">
    <input type="button" id='novo' - href="#" value ="Adicionar Funcionário">

    <table>
        <tr>
            <th style='text-align: center;'>Id</th>
            <th style='text-align: center;'>Nome</th>
            <th style='text-align: center;'>E-mail</th>
            <th style='text-align: center;'>Senha</th>
            <th style='text-align: center;'>Endereço</th>
            <th style='text-align: center;'>Data de Nascimento</th>
            <th style='text-align: center;'>CPF</th>
            <th style='text-align: center;'>Cargo</th>
            <th style='text-align: center;'>Setor</th>

            <th colspan="2">Ação</th>
        </tr>`;

    for(var i in funcionarios){
        str+=`<tr id=${funcionarios[i].id_funcionario}>
                <td>${funcionarios[i].id_funcionario}</td>
                <td>${funcionarios[i].nome}</td>
                <td>${funcionarios[i].email}</td>
                <td>${funcionarios[i].senha}</td>
                <td>${funcionarios[i].endereco}</td>
                <td>${funcionarios[i].dataNasc}</td>
                <td>${funcionarios[i].cpf}</td>
                <td>${funcionarios[i].cargo}</td>
                <td>${funcionarios[i].setor}</td>
                <td><a class="edit" href="#" 
                    data-id="${funcionarios[i].id_funcionario}">Editar</a></td>
                <td><a class="delete" href="#" 
                    data-id="${funcionarios[i].id_funcionario}">Deletar</a></td>
            </tr>`;
            
    } 
    str+= `
    </table>
    </div>`;

    var tabela = document.querySelector("main");
    tabela.innerHTML = str;

    var linkNovo = document.querySelector("#novo");
    linkNovo.onclick = function(event){
        carregarForm();
    }

    const linksEdit = document.querySelectorAll(".edit");
    for(let linkEdit of linksEdit) {
        linkEdit.onclick = function(event){
            onEdit(event.target.getAttribute("data-id"));
        }
    }

    const linksDelete = document.querySelectorAll(".delete");
    for(let linkDelete of linksDelete) {
        linkDelete.onclick = function(event){
            onDeletar(event.target.getAttribute("data-id"));
        }
    }

}