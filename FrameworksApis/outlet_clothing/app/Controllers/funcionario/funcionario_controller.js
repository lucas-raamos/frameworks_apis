function iniciaFuncionarios(){
    carregarFuncionarios()
}

function carregarFuncionarios() {
    listarFuncionarios((erro, funcionarios) => {
        console.log(funcionarios);
        renderTabela(funcionarios);
    })
}

function carregarForm(funcionario){
    renderForm(funcionario);
}

function salvarFuncionario(funcionario){
    if(!funcionario.id_funcionario) {
        inserirFuncionario(funcionario, (erro,funcionario)=> {
            carregarFuncionarios();
            limparCampos();
        })    
    }
    else {
        atualizarFuncionario(funcionario.id_funcionario, funcionario, (erro, funcionario) => {
            carregarFuncionarios();
            limparCampos();
        })
    }
}

//Eventos
function onSalvar(funcionario){
    console.log("Funcionario: "+ funcionario);
    salvarFuncionario (funcionario)
}

function onCancelar(){
    carregarFuncionarios();
}

function onDeletar(id){
    deletarFuncionario(id, (erro, funcionario) => {
        alert(`Funcionario ${funcionario.nome} removido com sucesso!`);
        carregarFuncionarios();
    });
}

function onEdit(id){
    buscarFuncionario(id, (erro, funcionario) => {
        console.log("Carregando Funcionario " + funcionario.nome);
        carregarForm(funcionario);
    });
}



