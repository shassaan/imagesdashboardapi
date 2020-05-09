let mongoose = require('mongoose');

const server = 'mongodb+srv'; // REPLACE WITH YOUR DB SERVER
const database = 'imagesDb';      // REPLACE WITH YOUR DB NAME
const password = "hellocluster"
const url = `${server}://shassaan:${password}@cluster0-u7ps2.mongodb.net/${database}?retryWrites=true&w=majority`;
class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(url)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error',err)
       })
  }
}

module.exports = new Database()