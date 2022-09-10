const express=require('express');
const cors=require('cors');
const app= express();
require('dotenv').config();
const person=require('./models/Person')
const db_connect=require('./config/DBconnect')
db_connect()
app.use(cors());
app.use(express.json())
app.use('/person',require('./routes/PersonRoute'))
 app.listen(process.env.PORT,(err)=>err?console.log(err):console.log("server is running"))
