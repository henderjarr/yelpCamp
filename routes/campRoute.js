const   express     = require('express'),
        router      = express.Router(),
        camp        = require('../controller/camp')




router.get('/', camp.landingPage) 
router.get('/campgrounds', camp.viewCamps)
router.get('/campgrounds/new', camp.newCamp) 
router.get('/campgrounds/:id', camp.singleView)  

router.post('/campgrounds', camp.createCamp) 
 

module.exports = router