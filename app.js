const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

let campgroundsData = [
    { name: 'honge', image: 'https://s3.amazonaws.com/imagescloud/images/medias/camping/camping-tente.jpg' },
    { name: 'bigfarm', image: 'http://bustedwallet.com/wp-content/uploads/2014/05/Camping-Near-The-Lake-Background-Wallpaper.jpg' },
    { name: 'hatecamp', image: 'https://s3.amazonaws.com/imagescloud/images/medias/camping/MathieuDupuis-23.jpg' }
]

app.get('/', (req, res) => {
    res.render('landing')
})
app.get('/campgrounds', (req, res) => {

    res.render('campgrounds', { campgrounds: campgroundsData })
})

app.get('/campgrounds/new', (req, res) => {
    res.render('newCamp')
})

app.post('/campgrounds', (req, res) => {
    let name = req.body.name
    let image = req.body.image
    let newCamp = {
        name,
        image
    }
    campgroundsData.push(newCamp)
    res.redirect('/campgrounds')
})


app.listen(port, () => {
    console.log('server is runnign on port ' + port)
})