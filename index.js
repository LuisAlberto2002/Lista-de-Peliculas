
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const cors=require('cors');

app.use(cors());

const rutas=require('./rutas/rutas');
const mongoUrl='mongodb+srv://VulpesBlack:36944757Ara@vbdb.7dcjohk.mongodb.net/?retryWrites=true&w=majority'

app.use('',rutas);
app.get('',(req,res)=>{
    res.send('Apli Works');
    console.log('recibi una peticion');

})

mongoose.connect(mongoUrl).then(client=>{
    app.listen(3000,()=>{
        console.log('VBDB ONLINE')
    })
}).catch(err=>{
    console.log('VBDB DISSABLE', err);
});

