import express from 'express';
const app = express();

app.get('/get',(req:any,res:any)=>{
res.json({message:"Hello"})
})
app.listen(8907,()=>{
    console.log('Server is running 8907')
})