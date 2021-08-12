const path =require('path')
const express = require('express')
const hbs = require('hbs')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

//Define path for Express config
const pubDirPath = path.join(__dirname,'../public')
const viewPath= path.join(__dirname,'../templets/views')
const partialsPath= path.join(__dirname,'../templets/partials')

//Define paths for Express configertion
app.set('view engine', 'hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

app.use(express.static(pubDirPath))



app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Aswin'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Aswin'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        name:'Aswin'
    })
})

app.get('/weather',(req,res)=>{
    
    if(!req.query.address){
        return res.send({error:'You must provide an address'})
    }
    
    
    geoCode(req.query.address,(error,{long,lat,loc}={})=>{

        if(error){
            return res.send({error:error})
        }
        forecast(long, lat, (error, data) => {
            if(error){
                return res.send({error:erroe})
            }
            res.send({
                forecast:data,
                location:loc,
                address:req.query.address
            })
          })
    })
    
  
})

app.get('/help/*',(req,res)=>{
    res.render("404",{
        title:'Error',
        name:'Aswin',
        errorM:'help article not found '
    })
})

app.get('*',(req,res)=>{
    res.render("404",{
        title:'Error',
        name:'Aswin',
        errorM:'Page not found'
    })
})

app.listen(3000,()=>{
    console.log('server created')
})