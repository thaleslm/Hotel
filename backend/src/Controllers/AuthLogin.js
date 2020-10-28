const Express = require('express');

const User = require('../Models/usuarios');

const Login = Express.Router();

Login.post('/Login',  async(req, res)=>{
    const {email, password , data} = req.body;
    
 const user =  await  User.findOne({email, password});
        
       if(!user){
            return res.status(400).send("error : email ou senha invalido");
        }
      
    return res.send(`<h2>Sua reserva esta marcada para dia: ${user.data}<h2/>`)
       
     } );

module.exports = app =>{ app.use(Login)};