'use strict'


const Promocoes = use('App/Models/Promocoes')



class ClienteController {
  
    
    async coats ({ view }) { 
        return view.render("coats")
    }
    async shirts ({ view }) { 
        return view.render("shirts")
    }
    async trousers ({ view }) { 
        return view.render("trousers")
    }
    async promocoes ({ view }) { 
        const promocoes = await Promocoes.all()
        console.log(promocoes);
        return view.render('promocoes', { promocoes: promocoes.toJSON() })
    }

    async addpromocoes({ request, session, response }){
        const promocoes = await Promocoes.create({
            nome_cliente: request.input('nome_cliente'),
            email_cliente:  request.input('email_cliente')
        })
            session.flash({ 'successmessage': 'Receber Promoções'})
            return response.redirect('/')
    }

    
    async contato ({ view }) { 
        return view.render("contato")
    }



}



module.exports = ClienteController