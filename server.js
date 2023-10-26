const express = require('express');
const app = express();

app.get('/get',(req,res)=>{
res.json({message:"Hello"})
})
app.listen(8907,()=>{
    console.log('Server is running 8907')
})