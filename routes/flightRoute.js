const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example)

//add flight route
router.post('/addflight', controller.addFlight)

//get all flights route
router.get("/flights", controller.getallFlights)

//get single flight route
router.get("/flights/:id", controller.getSingleFlight)

//update flight route
router.put("/updateflight", controller.updateFlight)

//delete flight route
router.delete("/deleteflight", controller.deleteFlight)

module.exports = router;

