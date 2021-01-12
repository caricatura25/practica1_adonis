'use strict'
const Factory = use('Factory')
const Hash = use('Hash')
/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')
const user = await Factory
  .model('App/Models/User')
  .create()

  const usersArray = await Factory
  .model('App/Models/User')
  .createMany(5)
  
Factory.blueprint('App/Models/User', async (faker) => {
    return {
      username: faker.username(),
      email: faker.email(),
      password: await Hash.make(faker.password())
    }
  })
// User blueprint
Factory.blueprint('App/Models/User', (faker) => {
    return {
      username: faker.username(),
      password: faker.password()
    }
  })
  