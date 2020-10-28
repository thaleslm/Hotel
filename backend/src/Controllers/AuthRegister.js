const Express = require('express');

const User = require('../Models/usuarios');

const router = Express.Router();

router.post('/Register', async (req, res)=>{
   try{
       const user =  User.create(req.body);
       const {data} = req.body;

    
       return res.send(`<h1>data da reserva: ${data}<h1/>`)

    }catch(err){
        return res.send(err)
        
} 
});

module.exports = app =>{ app.use(router)};