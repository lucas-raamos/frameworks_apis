'use strict'

const Usuario = use('App/Models/Usuario')
const Funcionarios = use('App/Models/Funcionarios')
const Calcas = use('App/Models/Calcas')
const Camisetas = use('App/Models/Camisetas')
const Casacos = use('App/Models/Casacos')
const Adms = use('App/Models/Adms')
const Carrinho = use('App/Models/Carrinho')
const { validate } = use('Validator')




class LoginController {
    async store ({ request, session, response }) {
        const rules = {
          email: 'required|email|unique:login,email',
          senha: 'required'
        }
    
        const validation = await validate(request.all(), rules)
    
        if (validation.fails()) {
          session
            .withErrors(validation.messages())
            .flashExcept(['senha'])
    
          return response.redirect('back')
        }
    
        return 'Validation passed'
      }

    async login ({view}) { 
        console.log("Tela de Login")
        return view.render("login")

    }
    async cadastro ( {view}  ) { 
        return view.render("cadastro")
    }
    async categorias( {view }){
        return view.render("categorias")
    }
    async Sair ({ auth, response }) {
        //await auth.sair()
        return response.route('/bemvindo')
    }
    
    async adicionaUsuario({ request, session, response }){
        const usuario = await Usuario.create({
            nome:  request.input('nome'),
            email: request.input('email'),
            senha: request.input('senha')
    })
            session.flash({ 'successmessage': 'Adicionado'})
            return response.redirect('/')
    }

    async autenticar ({request, response, session}) { 
        // const usuario = new Usuario()
        // usuario.email = request.input('email')
        // usuario.senha = request.input('senha')
        // const usuario = Usuario.query()
        // .where ('email', request.input("email"))
        // .first()
        const usuario = await Usuario.findBy('email', request.input('email'))
        // if(usuario == "admin@admin.com" && usuario.senha == "123456"){
            if(usuario && usuario.senha == request.input("senha")){
            session.put("email", usuario.email);
            console.log("Nome do usuário é: ", usuario.email)
            console.log("Autenticado com sucesso!!!")
            return response.redirect('/bemvindo')

        } else{
            console.log("Usuário ou senha inválido")
            session.flash({
                notification: "Usuario ou senha invalidos!!"
            })
            return response.redirect('back')
        }
    }
    async bemVindo ({view,response,session}) {
        const email = session.get("email")
        //Tratamento de segurança condicionando
        if(email){
            return view.render("bemvindo",{email:email})
        }
        else {
            return response.redirect('/');
        }
    }
    //Adm
    async loginAdm ({view}) { 
        console.log("Tela login ADM")
        return view.render("loginadm")

    }
    async autenticarAdm ({request, response, session}) { 
        const adms = await Adms.findBy('email', request.input('email'))
            if(adms && adms.senha == request.input("senha")){
            session.put("email", adms.email);
            console.log("Nome do adm é: ", adms.email)
            console.log("Autenticado com sucesso!!!")
            return response.redirect('/funcionarios')

        } else{
            console.log("ADM INCORRETO!!!")
            session.flash({
                notification: "Usuario ou senha invalidos!!"
            })
            return response.redirect('back')
        }
    }

    //categorias
    

    /*adm
    async admin ({ view, response, session }) { 
        const email = session.get("email")
        if(email){
            return view.render("admin", {email:email})
        } else {
            return response.redirect('/')
        }
    }

    async bemVindo ({ view, response, session }) { 
        return view.render('/bemvindo')
    }*/

      //funcionarios
    
     
    async funcionarios ({ view }) { 
        const funcionarios = await Funcionarios.all()
        console.log(funcionarios);
        return view.render('funcionarios', { funcionarios: funcionarios.toJSON() })
    }

    async adicionaFuncionarios({ request, session, response }){
        const funcionarios = await Funcionarios.create({
            nome_funcionario:  request.input('nome_funcionario'),
            data_nasc: request.input('data_nasc'),
            endereco_funcionario: request.input('endereco_funcionario'),
            escolaridade_funcionario: request.input('escolaridade_funcionario')
    })
            session.flash({ 'successmessage': 'Adicionado'})
            return response.redirect('/funcionarios')
    }
    
    async edit_funcionarios ({ params, view }) {
        const funcionarios = await Funcionarios.find(params.id)
        return view.render('funcionarios-edite', {
            funcionarios: funcionarios.toJSON()
        })
    }

    async atualizaFuncionarios ({ params, request, response }) {
        const funcionarios = await Funcionarios.find(params.id)
        funcionarios.nome_funcionario          = request.input('nome_funcionario')
        funcionarios.data_nasc       = request.input('data_nasc')
        funcionarios.endereco_funcionario      = request.input('endereco_funcionario')
        funcionarios.escolaridade_funcionario = request.input('escolaridade_funcionario')
        await funcionarios.save()
        return response.redirect('/funcionarios')
    }

    async deletaFuncionarios ({ params, response, session }) {
        const funcionarios = await Funcionarios.find(params.id)
        await funcionarios.delete()
        session.flash({'successmessage': 'Quote has been deleted'})
        return response.redirect('/funcionarios')
    }
    //carrinho

    async carrinho ({ view }){
        const carrinho = await Carrinho.all()
        console.log(carrinho);
        return view.render('carrinho', { carrinho: carrinho.toJSON()})

    }
   

    //Estoque
    async estoque ({view}) { 
        console.log("Tela Estoque")
        return view.render("estoque")

    }
    async calcas ({ view }) { 
        const calcas = await Calcas.all()
        console.log(calcas);
        return view.render('calcas', { calcas: calcas.toJSON() })
    }
    async adicionaCalca({ request, session, response }){
        const calcas = await Calcas.create({
            marca_calca: request.input('marca_calca'),
            tamanho_calca:  request.input('tamanho_calca'),
            qtd_calca: request.input('qtd_calca')
        })
            session.flash({ 'successmessage': 'Calça adicionado'})
            return response.redirect('/calcas')
    }

    async edit_Calca ({ params, view }) {
        const calcas = await Calcas.find(params.id)
        return view.render('calca-edite', {
            calcas: calcas.toJSON()
        })
    }

    async atualizaCalca ({ params, request, response }) {
        const calcas = await Calcas.find(params.id)
        calcas.marca_calca = request.input('marca_calca')
        calcas.tamanho_calca  = request.input('tamanho_calca'),
        calcas.qtd_calca= request.input('qtd_calca')
        await calcas.save()
        return response.redirect('/calcas')
    }

    async deletaCalca ({ params, response, session }) {
        const calcas = await Calcas.find(params.id)
        await calcas.delete()
        session.flash({'successmessage': 'Quote has been deleted'})
        return response.redirect('/calcas')
    }


    //camiseta

    async camisetas ({ view }) { 
        const camisetas = await Camisetas.all()
        console.log(camisetas);
        return view.render('camisetas', { camisetas: camisetas.toJSON() })
    }

    async adicionaCamiseta({ request, session, response }){
        const camisetas = await Camisetas.create({
            marca_camiseta:  request.input('marca_camiseta'),
            tamanho_camiseta: request.input('tamanho_camiseta'),
            qtd_camiseta: request.input('qtd_camiseta')
        })
            session.flash({ 'successmessage': 'Camiseta adicionada'})
            return response.redirect('/camisetas')
    }

    async edit_Camiseta ({ params, view }) {
        const camisetas = await Camisetas.find(params.id)
        return view.render('camiseta-edite', {
            camisetas: camisetas.toJSON()
        })
    }

    async atualizaCamiseta ({ params, request, response }) {
        const camisetas = await Camisetas.find(params.id)
        camisetas.marca_camiseta  = request.input('marca_camiseta'),
        camisetas.tamanho_camiseta = request.input('tamanho_camiseta'),
        camisetas.qtd_camiseta = request.input('qtd_camiseta')
        await camisetas.save()
        return response.redirect('/camisetas')
    }

    async deletaCamiseta ({ params, response, session }) {
        const camisetas = await Camisetas.find(params.id)
        await camisetas.delete()
        session.flash({'successmessage': 'Quote has been deleted'})
        return response.redirect('/camisetas')
    }
    //casacos

    async casacos ({ view }) { 
        const casacos = await Casacos.all()
        console.log(casacos);
        return view.render('casacos', { casacos: casacos.toJSON() })
    }

    async adicionaCasaco({ request, session, response }){
        const casacos = await Casacos.create({
            marca_casaco:  request.input('marca_casaco'),
            tamanho_casaco: request.input('tamanho_casaco'),
            qtd_casaco: request.input('qtd_casaco')
        })
            session.flash({ 'successmessage': 'Casaco adicionado'})
            return response.redirect('/casacos')
    }

    async edit_Casaco ({ params, view }) {
        const casacos = await Casacos.find(params.id)
        return view.render('casaco-edite', {
            casacos: casacos.toJSON()
        })
    }

    async atualizaCasaco ({ params, request, response }) {
        const casacos = await Casacos.find(params.id)
        casacos.marca_casaco  = request.input('marca_casaco'),
        casacos.tamanho_casaco = request.input('tamanho_casaco'),
        casacos.qtd_casaco = request.input('qtd_casaco')
        await casacos.save()
        return response.redirect('/casacos')
    }

    async deletaCasaco ({ params, response, session }) {
        const casacos = await Casacos.find(params.id)
        await casacos.delete()
        session.flash({'successmessage': 'Quote has been deleted'})
        return response.redirect('/casacos')
    }

    

}



module.exports = LoginController