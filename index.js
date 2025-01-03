const express=require('express')
require('dotenv').config();
const app=express()
const Houses=require('./HouseS.json')
const cors=require('cors');
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.static('build'));
app.get('/',(req,res)=>{
    res.send('this is DreamHOUse Home')
})

app.get('/houses',(req,res)=>{
    res.send(Houses);
})
app.get('/houses/:id',(req,res)=>{
    const id =parseInt( req.params.id)
    const house=Houses.find(house=>house.id===id)
    res.send(house)
    console.log(house);
})

app.listen(PORT,'0.0.0.0',()=>{
    console.log(`this is running in port ${port} `);
})