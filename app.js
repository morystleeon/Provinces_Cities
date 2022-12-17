let express = require('express')
let app = express()
let port = 3000

let models = require('./models/index')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world!')
})

function logUrl(req, res, next) {
    console.log('Request URL ', req.originalUrl)
    next()
}

app.get('/province', logUrl, (req, res) => {
    let findUser = models.Provinces.findAll().then(function (result)
    {
        if (result.length < 1) {
            res.json({message: "Data not Available"})
        }
        res.json(result)
    })
})
app.get('/province/:id', (req, res) => {
    let findUser = models.Provinces.findOne({where: {id:req.params.id}}).then(function (result)
    {
        if (result.length < 1) {
            res.json({message: "Data not Available"})
        }
        res.json(result)
    })
})
app.post('/province', (req, res) => {
    let createProvinces = models.Provinces.create(req.body)
    if(!createProvinces){
        console.error('Error Create Province')
    }
    res.json(req.body)
})

app.get('/cities', logUrl, (req, res) => {
    let findUser = models.Cities.findAll().then(function (result)
    {
        if (result.length < 1) {
            res.json({message: "Data not Available"})
        }
        res.json(result)
    })
})
app.get('/cities/:id', (req, res) => {
    let findUser = models.Cities.findOne({where: {id:req.params.id}}).then(function (result)
    {
        if (result.length < 1) {
            res.json({message: "Data not Available"})
        }
        res.json(result)
    })
})
app.post('/cities', (req, res) => {
    let createCities = models.Cities.create(req.body)
    if(!createCities){
        console.error('Error Create City')
    }
    res.json(req.body)
})

app.listen(port, () => {
    console.log('Example app listen to port 3000')
})