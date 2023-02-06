const jwt = require('jsonwebtoken')
 const User = require('../model/user')
 const validateLoginInput = require('../validation/login')
 require('dotenv').config()

 const postLogin = (req,res) =>{
    
    const {errors,isValid} = validateLoginInput(req.body)

    if(!isValid){
        return res.status(400).json(errors);
    }
    const email = req.body.email
    const password = req.body.password

    if(email === process.env.ADMIN_EMAIL && password ===process.env.ADMIN_PASSWORD){
          
        const payload = { email:email }

        jwt.sign(
            payload,
            "secret", 

            {
                expiresIn:3600
            },
            (err,token) =>{
                if(err) console.error('some error in jwt',err);

                else{
                    res.json({
                        success:true,
                        email:email,
                        token: `Bearer ${token}`
                    })
                }
            }
        )
            
        
       
    }else{
      let  errors = 'Incorrect email or password'
        return res.status(400).json(errors)
    }

     
 }

 const getUsers = (req,res)=>{

    console.log('get users reacdeh');

   User.find().then((allUsers)=>{
       res.json({
        status:true,
        users:allUsers
       })
   })

   
 }

 const deleteUser =async (req,res)=>{

    try{
        await User.deleteOne({ _id:req.params.id})     
        res.status(204).end()
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message})
    }
 }

 module.exports = {postLogin,getUsers,deleteUser}