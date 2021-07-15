'use strict'



const Camisetas  = use('App/Models/Camisetas')






class CamisetasApiController {
    async index({ request, response, view }) {
        const camisetas = await Camisetas.all();
    
    return camisetas;

    }
    

}



module.exports = CamisetasApiController