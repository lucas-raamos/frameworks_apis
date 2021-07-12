'use strict'

const LoginController = require('../app/Controllers/Http/LoginController')
const ClienteController = require('../app/Controllers/Http/ClienteController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('bemvindo')
Route.get("/" ,'LoginController.login')
Route.get('/login', 'LoginController.login')
Route.get('/cadastro', 'LoginController.cadastro')
Route.post('/cadastro', 'LoginController.adicionaUsuario')
Route.post("/auth" ,'LoginController.autenticar')
Route.get("/bemvindo" ,'LoginController.bemVindo')
Route.get('/sair','LoginController.Sair')
Route.post('login', 'LoginController.store')
/*Route.get('/', 'TaskController.index')
Route.post('tasks', 'TaskController.store')
Route.delete('tasks/:id', 'TaskController.destroy')*/


Route.post('/usuario', 'LoginController.store')
Route.post('/loginAuth', 'LoginController.loginAuth')
Route.get('/usuario', 'LoginController.index')
Route.get('/usuario', 'LoginController.index').middleware('auth');



//adm
Route.get('/loginadm', 'LoginController.loginAdm')
Route.post("/authadm" ,'LoginController.autenticarAdm')


Route.get('/funcionarios.html' , 'LoginController.funcionarios')


//Route.get('/carrinho', 'LoginController.carrinho')

//Estoque
Route.get('/estoque', 'LoginController.estoque')


Route.get('/calcas', 'LoginController.calcas')
Route.post('calcas', 'LoginController.adicionaCalca')
Route.get('/calca-edite/:id','Logincontroller.edit_Calca')
Route.get('/calca-edite/calca-edite/:id', 'Logincontroller.atualizaCalca')
Route.get('/delete-calca/:id','Logincontroller.deletaCalca')


Route.get('/camisetas', 'LoginController.camisetas')
Route.post('camisetas', 'LoginController.adicionaCamiseta')
Route.get('/camiseta-edite/:id','Logincontroller.edit_Camiseta')
Route.get('/camiseta-edite/camiseta-edite/:id', 'Logincontroller.atualizaCamiseta')
Route.get('/delete-camiseta/:id','Logincontroller.deletaCamiseta')

Route.get('/casacos', 'LoginController.casacos')
Route.post('casacos', 'LoginController.adicionaCasaco')
Route.get('/casaco-edite/:id','Logincontroller.edit_Casaco')
Route.get('/casaco-edite/casaco-edite/:id', 'Logincontroller.atualizaCasaco')
Route.get('/deleta-casaco/:id','Logincontroller.deletaCasaco')


//ROUPAS CLIENTE
Route.get('shirts', 'ClienteController.shirts')
Route.get('coats', 'ClienteController.coats')
Route.get('trousers', 'ClienteController.trousers')


//Fale conosco
Route.get('contato', 'ClienteController.contato')

