// Using object express
const express = require('express')
// App express
const app = express()
// Will initiate app on port localhost:3000
const port = 3000

// initial path, answers to url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Answering text
//localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Welcome to launchX')
})

//Calling back an object
//localhost:3000/explorersInNode
app.get('/explorersInNode', (req,res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

// This starts the app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})