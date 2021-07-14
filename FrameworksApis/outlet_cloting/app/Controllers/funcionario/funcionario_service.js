const URI = "http://127.0.0.1:3333/funcionarios";

function listarFuncionarios(callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if(this.status === 200) {
                try {
                    callback(null, JSON.parse(this.responseText));
                } catch(msg){
                    const erro = {
                        status: 0,
                        msg: msg
                    }    
                    callback(erro, null);
                }
            }
            else {
                const erro = {
                    status: this.status,
                    msg: this.responseText
                }
                callback(erro, null);
            }
        }
    };
    xhttp.open("GET", URI, true);
    xhttp.send();
}

function inserirFuncionario(funcionario, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if(this.status === 201) {
                console.log(this.responseText) 
                callback(null, this.responseText)
            }
            else {
                const erro = {
                    status: this.status,
                    msg: this.responseText
                }
                callback(erro, null);
            }
        }
    };
    xhttp.open("POST", URI, true);
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send(JSON.stringify(funcionario));
}

function deletarFuncionario(id, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if(this.status === 200) {
                try {
                    callback(null, JSON.parse(this.responseText));
                } catch(msg){
                    const erro = {
                        status: 0,
                        msg: msg
                    }    
                    callback(erro, null);
                }
            }
            else {
                const erro = {
                    status: this.status,
                    msg: this.responseText
                }
                callback(erro, null);
            }
        }
    };
    xhttp.open("DELETE", URI+"/"+id, true);
    xhttp.send();

}

function buscarFuncionario(id, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if(this.status === 200) {
                try {
                    callback(null, JSON.parse(this.responseText));
                } catch(msg){
                    const erro = {
                        status: 0,
                        msg: msg
                    }
                    console.log(erro.msg);    
                    callback(erro, null);
                }
            }
            else {
                const erro = {
                    status: this.status,
                    msg: this.responseText
                }
                callback(erro, null);
            }
        }
    };
    xhttp.open("GET", URI+"/"+id, true);
    xhttp.send();

}

function atualizarFuncionario(id, funcionario, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if(this.status === 200) {
                console.log(this.responseText) 
                callback(null, this.responseText)
            }
            else {
                const erro = {
                    status: this.status,
                    msg: this.responseText
                }
                callback(erro, null);
            }
        }
    };
    xhttp.open("PUT", URI+"/"+id, true);
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send(JSON.stringify(funcionario));
}
