const router = require('express').Router();
const Cars = require('./cars-model.js');




router.get('/', (req, res) => { 
    Cars.find()
    .then(cars => { 
        res.status(200).json(cars); 
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({errorMessage: 'error with get request'})
    })
})

router.post('/post', (req, res) => { 
    Cars.add(req.body)
    .then(cars => { 
        console.log(cars)
        res.status(200).json(cars);

    })
    .catch(error => { 
        console.log(error)
        res.status(500).json({errorMessage: "error in the body of the request"})

    })
})

module.exports = router