const mongoose = require('../database/index');

const UserSchema = new mongoose.Schema({
    name :{
        type : String,
        required: true
        
    },
    email:{
        type: String,
        unique :true,
        required: true,
        lowercase: true

    },
    password:{
        type: String,
        required: true,
    },
    data: {
            type: String,
            require: true
        },   
});

const User = mongoose.model('usuarios', UserSchema);

module.exports = User;