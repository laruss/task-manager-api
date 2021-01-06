const express = require('express')
require('./db/mongoose')
const tasksRouter = require('./routers/task')
const usersRouter = require('./routers/user')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(tasksRouter, usersRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port);  
})