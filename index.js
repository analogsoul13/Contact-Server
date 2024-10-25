//importing json server library
const jsonServer = require('json-server')

//creating server instance
const contactsServer = jsonServer.create()

//getting default middlewares
const middleWare = jsonServer.defaults()

//setting routes for resources
const routes = jsonServer.router('db.json')

//configuring server
contactsServer.use(middleWare)
contactsServer.use(routes)

const PORT = 3000 || process.env.PORT

contactsServer.listen(PORT, () => {
    console.log('Server running at :' + PORT)
})
