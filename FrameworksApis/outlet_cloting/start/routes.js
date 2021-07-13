'use strict'

const LoginController = require('../app/Controllers/Http/LoginController')
const ClienteController = require('../app/Controllers/Http/ClienteController')
const AdmController = require('../app/Controllers/Http/AdmController')


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

//Estoque Rotas

Route.get('/calcas', 'AdmController.calcas')
Route.post('calcas', 'AdmController.adicionaCalca')
Route.get('/calca-edite/:id','AdmController.edit_Calca')
Route.get('/calca-edite/calca-edite/:id', 'AdmController.atualizaCalca')
Route.get('/delete-calca/:id','AdmController.deletaCalca')


Route.get('/camisetas', 'AdmController.camisetas')
Route.post('camisetas', 'AdmController.adicionaCamiseta')
Route.get('/camiseta-edite/:id','Admcontroller.edit_Camiseta')
Route.get('/camiseta-edite/camiseta-edite/:id', 'Admcontroller.atualizaCamiseta')
Route.get('/delete-camiseta/:id','Admcontroller.deletaCamiseta')

Route.get('/casacos', 'AdmController.casacos')
Route.post('casacos', 'AdmController.adicionaCasaco')
Route.get('/casaco-edite/:id','AdmController.edit_Casaco')
Route.get('/casaco-edite/casaco-edite/:id', 'AdmController.atualizaCasaco')
Route.get('/deleta-casaco/:id','AdmController.deletaCasaco')

//FUNCIONARIOS (ADM)
Route.get('/funcionarios', 'AdmController.funcionarios')
Route.post('funcionarios', 'AdmController.adicionaFuncionario')
Route.get('/funcionario-edite/:id','AdmController.edit_Funcionario')
Route.get('/funcionario-edite/funcionario-edite/:id', 'AdmController.atualizaFuncionario')
Route.get('/delete-funcionario/:id','AdmController.deleteFuncionario')

//ROUPAS CLIENTE
Route.get('shirts', 'ClienteController.shirts')
Route.get('coats', 'ClienteController.coats')
Route.get('trousers', 'ClienteController.trousers')

//RECEBA AS PROMOÇÕES
Route.get('/promocoes', 'ClienteController.promocoes')
Route.post('promocoes', 'ClienteController.receberPromo')


//Fale conosco
Route.get('contato', 'ClienteController.contato')

