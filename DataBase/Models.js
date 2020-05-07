const mongoose = require('mongoose')
let User = mongoose.Schema({
    email:String,
    fullName:String,
    password:String,
    gender:String,
    contactNumber:String,
    Roles:Array<String>[]
});

module.exports = mongoose.model('User',User);

