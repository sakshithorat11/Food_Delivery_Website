const express = require('express');
const app = express()
const port = 5004
// const router=express.Router();
const mongodb=require("./db");
const { default: mongoose } = require('mongoose');
app.use(express.json());
mongodb();

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','http://localhost:3000')
  res.header(
   "Access-Control-Allow-Headers",
   "Origin,X-Requested-With,Content-Type,Accept"
  )
  next();
});




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api',require('./Routes/Create'));

app.use('/api',require('./Routes/DisplayData'));
app.use('/api',require('./Routes/OrderData'));



app.use(express.json())
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

//module.exports=router;
