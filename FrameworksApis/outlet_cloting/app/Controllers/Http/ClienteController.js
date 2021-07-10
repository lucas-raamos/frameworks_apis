'use strict'






class ClienteController {
  
    async contato ({ view }) { 
        return view.render("contato")
    }
    async coats ({ view }) { 
        return view.render("coats")
    }
    async shirts ({ view }) { 
        return view.render("shirts")
    }
    async trousers ({ view }) { 
        return view.render("trousers")
    }



}



module.exports = ClienteController