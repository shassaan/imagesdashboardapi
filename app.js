const express = require('express');
const app = express();

const DataBase = require('./DataBase/Database');
const UserRoute = require('./Routes/UserRoute');


const port = 8080;
app.use(express.json());



app.use('/api/Users',UserRoute);






app.listen(port,()=>{
    console.log("server Started Listening at :",port)
})