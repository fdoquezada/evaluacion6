const { response } = require('express')
const express = require('express')
const app = express()
const path = require('path')
const axios=require('axios')
const port = 4000

app.use(express.static('public'))
/*app.get('/', (req, res, next) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))

})*/
async function iniciar(){
    let respuesta=await axios.get("https://randomuser.me/api");
    console.log(respuesta.data);
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))