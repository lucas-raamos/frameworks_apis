function renderForm(funcionario) {
    //Se funcionario estiver indefinido, cria novo funcionario.
    if(!funcionario) {
        funcionario = {};
    }
    
    var str = `
    <h2>Formulario de Funcionarios</h2>
    <form id="formularioFunc">
        <label for="txtnome">Nome:</label>
        <input type="text" id="txtnome" required = "required" value="${funcionario.nome ?funcionario.nome : ''}">
        <br />
        <label for="txtemail">Email:</label>
        <input type="text" id="txtemail" required = "required" value="${funcionario.email ?funcionario.email : ''}">
        <br />
        <label for="txtsenha">Senha:</label>
        <input type="text" id="txtsenha" required = "required" value="${funcionario.senha ?funcionario.senha : ''}">
        <br />
        <label for="textendereco">Endereço:</label>
        <input type="text" id="txtendereco" required = "required" value="${funcionario.endereco ? funcionario.endereco : ''}">
        <br />
        <label for="txtdataNasc">Data Nascimento:</label>
        <input type="text" id="txtdataNasc" required = "required" value="${funcionario.dataNasc ?funcionario.dataNasc : ''}">
        <br />
        <label for="txtcpf">Cpf:</label>
        <input type="text" id="txtcpf" required = "required" value="${funcionario.cpf ?funcionario.cpf : ''}">
        <br />
        <label for="txtcargo">Cargo:</label>
        <input type="text" id="txtcargo" required = "required" value="${funcionario.cargo ?funcionario.cargo : ''}">
        <br />
        <label for="txtsetor">Setor:</label>
        <input type="text" id="txtsetor" required = "required" value="${funcionario.setor ?funcionario.setor : ''}">
        <br />
        <br />
        <br />
        <input type="submit" id="btnsalvar" value="Salvar">
        <input type="reset" id="btncancelar" value="Cancelar">
        <br />
    </form>
    `;

    let containerForm = document.querySelector("main");
    containerForm.innerHTML = str;

    var form = document.querySelector("#formularioFunc");

    form.onsubmit = function(event){
        event.preventDefault();
        onSalvar(getDataFuncionario(funcionario));            
    }

    form.onreset = function(event){
        event.preventDefault();
        onCancelar();
    }
    
}

function getDataFuncionario(funcionario){
    funcionario.nome = document.querySelector("#txtnome").value;
    funcionario.email = document.querySelector("#txtemail").value;
    funcionario.senha = document.querySelector("#txtsenha").value;
    funcionario.endereco = document.querySelector("#txtendereco").value;
    funcionario.dataNasc = document.querySelector("#txtdataNasc").value;
    funcionario.cpf = document.querySelector("#txtcpf").value;
    funcionario.cargo = document.querySelector("#txtcargo").value;
    funcionario.setor = document.querySelector("#txtsetor").value;
    return funcionario;
}

function limparCampos(){
    document.querySelector("#txtnome").value="";
    document.querySelector("#txtemail").value="";
    document.querySelector("#txtsenha").value="";
    document.querySelector("#txtendereco").value="";
    document.querySelector("#txtdataNasc").value="";
    document.querySelector("#txtcpf").value="";
    document.querySelector("#txtcargo").value="";
    document.querySelector("#txtsetor").value="";
   
}

