'use strict'


const Usuario = use('App/Models/Usuario')
const Adms = use('App/Models/Adms')
const Carrinho = use('App/Models/Carrinho')
const { validate } = use('Validator')




class LoginController {

    async store ({ request, response }) {
        const data = request.only(['email', 'username', 'password']);
        
        const usuario = await Usuario.create(data);

        return usuario;
    }

    async index({ request, response}){
        const usuarios = Usuario.all();

        return usuarios;
    }


    

    async loginAuth ({request, response, auth, view}) { 
      
        try{
            const{email, password} =request.all();

            const token = await auth.attempt(email, password);
            
            return token;
        }   catch (error) {
            return response.status(500).send({error: error})
        }
        
        }

    async login ( {view}  ) { 
        console.log("Tela de login")
        return view.render("login")
    }   

    
    
    async cadastro ( {view}  ) { 
        return view.render("cadastro")
    }

    async Sair ({ auth, response }) {
        //await auth.sair()
        return response.route('/bemvindo')
    }
    
    async adicionaUsuario({ request, session, response }){
        const usuario = await Usuario.create({
            email: request.input('email'),
            username:  request.input('username'),
            password: request.input('password')
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
            if(usuario && usuario.senha == request.input("password")){
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
            return response.redirect('/camisetas')

        } else{
            console.log("ADM INCORRETO!!!")
            session.flash({
                notification: "Usuario ou senha invalidos!!"
            })
            return response.redirect('back')
        }
    }

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

   
    

}



module.exports = LoginController