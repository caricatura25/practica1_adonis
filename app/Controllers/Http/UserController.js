const { validate } = use('Validator')
const User=use('App/Models/User')

class UserController {
    async login ({ request, session, response }) {
        const rules = {
          email: 'required|email|unique:users,email',
          password: 'required'
        }
        const validation = await validate(request.all(), rules)
    
        if (validation.fails()) {
          session
            .withErrors(validation.messages())
            .flashExcept(['password'])
    
          return response.redirect('back')
        }
        return 'Validation passed'
      }
      async insertar({request,response})
      { const rules = {
        'username': 'required',
        'email': 'required|email|unique:users,email',
        'password': 'required'
      }
      const validation = await validate(request.all(), rules)
      if(validation.fails())
      {
        return validation.messages()
      }
      await User.create(request.all())
      return response.status(200).json({
        mensaje: "Datos insertados con exito"
      })
      }
      async actualizar({request,response,params})
      {
        const rules = {
          'username': 'required',
          'email' : 'required|email|unique:users,email',
          'password' : 'required'
        }
        const validation = await validate(request.all(), rules)
        await User.query().where('id',params.id).update(request.all())

        return response.status(200).json({
          mensaje: "Datos actualizados con exito"
        })
      }
      async mostrar({})
      {
        return await User.all()
      }
      async eliminar({request,response,params})
      {
        const rules = {
          'username': 'required',
          'email' : 'required|email|unique:users,email',
          'password' : 'required'
        }
        const validation = await validate(request.all(), rules)
        await User.eliminar().where('id',params.id).update(request.all())

        return response.status(200).json({
          mensaje: "Datos eliminados con exito"
        })
      }
    }
module.exports = UserController
