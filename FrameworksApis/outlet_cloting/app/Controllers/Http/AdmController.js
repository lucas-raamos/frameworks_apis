'use strict'



const Calcas = use('App/Models/Calcas')
const Camisetas = use('App/Models/Camisetas')
const Casacos = use('App/Models/Casacos')
const Funcionarios = use('App/Models/Funcionarios')





class admController {

    //ESTOQUE DE PRODUTOS
    //Calças
    async calcas ({ view }) { 
        const calcas = await Calcas.all()
        console.log(calcas);
        return view.render('calcas', { calcas: calcas.toJSON() })
    }
    
    async adicionaCalca({ request, session, response }){
        const calcas = await Calcas.create({
            marca_calca: request.input('marca_calca'),
            tamanho_calca:  request.input('tamanho_calca'),
            preco_calca:  request.input('preco_calca'),
            qtd_calca: request.input('qtd_calca')
        })
            session.flash({ 'successmessage': 'Calça adicionada'})
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
        calcas.preco_calca  = request.input('preco_calca'),
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


    //camisetas

    async camisetas ({ view }) { 
        const camisetas = await Camisetas.all()
        console.log(camisetas);
        return view.render('camisetas', { camisetas: camisetas.toJSON() })
    }

    async adicionaCamiseta({ request, session, response }){
        const camisetas = await Camisetas.create({
            marca_camiseta:  request.input('marca_camiseta'),
            tamanho_camiseta: request.input('tamanho_camiseta'),
            preco_camiseta: request.input('preco_camiseta'),
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
        camisetas.preco_camiseta = request.input('preco_camiseta'),
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
            preco_casaco: request.input('preco_casaco'),
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
        casacos.preco_casaco = request.input('preco_casaco'),
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

    //FUNCIONARIOS
    async funcionarios ( {view}  ) { 
        const funcionarios = await Funcionarios.all()
        console.log(funcionarios);
        return view.render('funcionarios', { funcionarios: funcionarios.toJSON() })
    }
 
    async adicionaFuncionario({ request, session, response }){
        const funcionarios = await Funcionarios.create({
            nome_funcionario:  request.input('nome_funcionario'),
            data_nasc: request.input('data_nasc'),
            endereco_funcionario: request.input('endereco_funcionario'),
            escolaridade_funcionario: request.input('escolaridade_funcionario')
    })
            session.flash({ 'successmessage': 'Adicionado'})
            return response.redirect('/funcionarios')
    }
    
    async edit_funcionario ({ params, view }) {
        const funcionarios = await Funcionarios.find(params.id)
        return view.render('funcionario-edite', {
            funcionarios: funcionarios.toJSON()
        })
    }

    async atualizaFuncionario ({ params, request, response }) {
        const funcionarios = await Funcionarios.find(params.id)
        funcionarios.nome_funcionario          = request.input('nome_funcionario')
        funcionarios.data_nasc       = request.input('data_nasc')
        funcionarios.endereco_funcionario      = request.input('endereco_funcionario')
        funcionarios.escolaridade_funcionario = request.input('escolaridade_funcionario')
        await funcionarios.save()
        return response.redirect('/funcionarios')
    }

    async deleteFuncionario ({ params, response, session }) {
        const funcionarios = await Funcionarios.find(params.id)
        await funcionarios.delete()
        session.flash({'successmessage': 'Quote has been deleted'})
        return response.redirect('/funcionarios')
    }

    

}



module.exports = admController