var express = require('express');
const {db} = require('./db')
var app = express();

// importing models 
const User = require('./models/user')
const Task = require('./models/task')

// importing routers
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
//const app = express()
const port = process.env.PORT || 1433

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


db.sync({alter:false}).then(() => {

}).catch(err => console.log(err));

app.listen(4000, () => {
    console.log('Server Started')
})
