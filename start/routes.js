'use strict'

const { url } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get(url,'UserController.login')
Route.post(url,'UserController.insertar')
Route.put('actualizar/:id','UserController.actualizar')
Route.delete('eliminar/:id','UserController.eliminar')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
