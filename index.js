const express = require('express') /// importando el modelo express

const app = express()

//http://localhost:3000/

app.get('/', (req, res) => {
    res.send("hola con GET")
})


app.post('/', (req, res) => {
    res.send("hola con POST")
})

app.put('/', (req, res) => {
    res.send("hola con PUT")
})

app.patch('/', (req, res) => {
    res.send("hola con PATCH")
})

app.delete('/', (req, res) => {
    res.send("hola con DELETE")
})


app.listen(3000, () => {console.log('listening on port')})