const express = require('express');
const app = express();

//asign routes
const UserRoute = require('./Routes/UserRoute');

//asign database
const database = require('./DataBase/Database')
const port = 8080;
app.use(express.json());



app.use('/api/Users',UserRoute)




//on which port application run

app.listen(port,()=>{
    console.log("server Started Listening at :",port)
})