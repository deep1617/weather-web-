const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const staticpath = path.join(__dirname,"../public/template");
const partialpath = path.join(__dirname,"../public/partials");
// const portno = 
app.use(express.static(staticpath));
app.set('view engine','hbs');
app.set('views',staticpath);
hbs.registerPartials(partialpath);
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('*',(req,res)=>{
    res.render('404errorpage');
})
const PORT = process.env.PORT ||5000;
app.listen(PORT,()=>{
    console.log(`the port is listening to port no ${PORT}`);
})