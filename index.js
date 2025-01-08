//1 load .env file
require('dotenv').config()
//2 epress import
const express=require('express')
//6 import cors
const cors = require('cors')
 require('./db/connection')
const router = require('./Router/router')
//3 create an app using express
const restoCafeServer = express()
//7
restoCafeServer.use(cors())
restoCafeServer.use(express.json())
restoCafeServer.use(router)
//4 port creation
const PORT = 4000 || process.env.PORT
//5.App 
restoCafeServer.listen((PORT),()=>{
    console.log("restoCafeServer listening on the port " +PORT);
})
restoCafeServer.get('/',(req,res)=>{
    res.send("Welcome to restoCafeServer")
})
