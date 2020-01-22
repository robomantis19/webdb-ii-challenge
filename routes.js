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

module.exports = router