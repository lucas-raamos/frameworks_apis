'use strict'

const Shirts = use('App/Models/Shirts')
const Coats = use('App/Models/Coats')
const Trousers = use('App/Models/Trousers')






class ClienteController {
    async shirts ({ view }) { 
        const shirts = await Shirts.all()
        console.log(shirts);
        return view.render('shirts', { shirts: shirts.toJSON() })
    }
    async coats ({ view }) { 
        const coats = await Coats.all()
        console.log(coats);
        return view.render('coats', { coats: coats.toJSON() })
    }

    async trousers ({ view }) { 
        const trousers = await Trousers.all()
        console.log(trousers );
        return view.render('trousers', { trousers : trousers .toJSON() })
    }

    

}



module.exports = ClienteController