const request = require('request')

const forecast =(a,b,callback)=>{

const url='http://api.weatherstack.com/current?access_key=089c9907078e6e2faddfd4ba6d710d6e&query='+b+','+a+'122.4233&units=f'

 request({url, json:true},(error, {body}={})=>{
    if (error) {
        callback('Unbale to connect to the internet',undefined)
    } else if (body.error){
       callback("Cann't find this location, try another location",undefined)
    } else {
        callback(undefined,'Forecast: '+body.current.weather_descriptions+'. It is currently '+body.current.temperature+' degress out. It feels like '+body.current.feelslike+' degress out.             Humidity:'+body.current.humidity)
    }
 })

}
// a=35.4867029846329
// b=101.901875103385

// c=42.3605
// d=-71.0596

// forecast(b,a,(error,data)=>{
//     console.log(error)
//     console.log(data)

// })

module.exports= forecast