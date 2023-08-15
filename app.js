const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'))

})
app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.listen(8000, () =>{
    console.log('servidor corriendo')
})