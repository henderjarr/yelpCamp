const   express     = require('express'),
        app         = express(),
        port        = 3000,
        path        = require('path'),
        bodyParser  = require('body-parser'),
        mongoose    = require('mongoose'),
        camp        = require('./routes/campRoute')

mongoose.connect('mongodb://localhost/yelpCamp_database',{
    useMongoClient: true
})     


app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

app.use('/', camp)




app.listen(port, () => {
    console.log('server is runnign on port ' + port)
})