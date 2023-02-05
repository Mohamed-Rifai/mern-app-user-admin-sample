require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admin')
//express app
const app = express()

app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
 

//route middleware
app.use('/',userRoutes)
app.use('/admin',adminRoutes)

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{ 
    app.listen(process.env.PORT,()=>{ 
        console.log('Mongodb connected & listening on port ',process.env.PORT); 
    })  
}).catch((err)=>{
    console.log(err);
  
})




 




