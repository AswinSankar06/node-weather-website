const request = require('request')


const geoCode=(addresse,callback)=>{

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+addresse+'.json?access_token=pk.eyJ1IjoiYXN3aW5zIiwiYSI6ImNrcnlxejl2dDEyeGwyb3FqZDFhNmczM20ifQ.NexPAW71FbO5DwvgutXhUg&limit=1'

request({url,json:true},(error,{body})=>{    
    if(error){
        callback('Unable connect to the webserver',undefined)
    }else if(body.features.length===0){
        callback('Unable get the co-ordinates',undefined)
    }else{
        callback(undefined,{
            long:body.features[0].center[0],
            lat:body.features[0].center[1],
            loc:body.features[0].place_name
        }
            )
    }
})
}
// geoCode('boston',(error,{long,lat,loc}={})=>{
//     console.log(error)
//     console.log(lat)
//     console.log(long)
    
// })

module.exports= geoCode