
const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
     name: String,
     username: String,
     password : String,
     img : String
});

let User = mongoose.model('users',userSchema);

module.exports = User;