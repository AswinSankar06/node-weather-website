


// fetch('http://localhost:3000/weather?address=china').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }else{
//            console.log(data.location)
//            console.log(data.forecast)
//         }
//     })
// })


const weatherApp= document.querySelector('form')
const wLocation=document.querySelector('input')
const messageOne = document.querySelector('#name')
const messageTwo = document.querySelector('#forcast')

weatherApp.addEventListener('submit',(e)=>{
    e.preventDefault()
    let locationValue= wLocation.value
    messageOne.textContent='Loding...'
    messageTwo.textContent=''
    fetch('/weather?address='+locationValue).then((response)=>{
    
        response.json().then((data)=>{
        if(data.error){
            messageOne.textContent=data.error
            messageTwo.textContent=''
        }else{
            messageOne.textContent='Location:'+data.location
            messageTwo.textContent=data.forecast

        }
    })
    
})

})