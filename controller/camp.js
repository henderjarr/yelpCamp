const camp = require('../models/yelpData')

module.exports = {

    landingPage(req, res) {
        res.render('landing')
    },

    viewCamps(req, res) {
        camp.find({}, (err, campgroundsData) => {
            if (err) {
                console.log(err)
            }
            else {
                res.render('campgrounds', { campgrounds: campgroundsData })
            }
        })
    },

    newCamp(req, res) {
        res.render('newCamp')
    },

    singleView(req, res) {
        // let camp_id = req.params.id
        // camp.findById(camp_id, (err, viewCamp) => {
        //     if (err) {
        //         console.log(err)
        //     }
        //     else {
        //         res.send('should be a camp')
        //     }
        // })
    },

    createCamp(req, res) {
        let bod = req.body
        camp.create(bod, (err, campPost) => {
            if (err) {
                console.log(err)
            }
            else {
                res.redirect('/campgrounds')

            }
        })
    }
}