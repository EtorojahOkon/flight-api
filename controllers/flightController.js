//new additional import
const fs = require('fs')
const models = require("../models/Flight");
const model = models.exampleModel

exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}

//add flight controller
exports.addFlight = (req, res) => {
    
    //validate parameters
    if (!req.body.title || !req.body.time || !req.body.price || !req.body.date) {
        res.status(403).send(JSON.stringify({"status" : "error", "data" : {"message": "Please fill in all fields"}}))
    }
    else{
        const id = (model.length === 0) ? 1 : (model[model.length - 1].id + 1)
        model.push({"id" : id, "title" : req.body.title, "time" : req.body.time, "price" : req.body.price, "date" : req.body.date})
        res.status(200).send(JSON.stringify({"status" : "success", "data" : {"message": "Flight added successfully", "id" : id}}))
    } 
}

//get all flights controller
exports.getallFlights = (req, res) => {
    res.status(200).send(JSON.stringify({"status" : "success", "data" : {"message": "Flights fetched successfully", "flights" : model}}))
}

//get single flight controller
exports.getSingleFlight = (req, res) => {
    const id = req.params.id
    if (isNaN(id) || id == 0) res.status(403).send(JSON.stringify({"status" : "error", "data" : {"message" : "Invalid parameter passed"}}))
    const result = model.filter((dat) => { return dat.id == id })

    if (result.length === 0) {
        res.status(200).send(JSON.stringify({"status" : "success", "data" : {"message": "No such flight found", "flight" : []}}))
    }
    else {
        res.status(200).send(JSON.stringify({"status" : "success", "data" : {"message": "Flight fetched successfully", "flight" : result[0]}}))
    } 
}

//update flight controller
exports.updateFlight = (req, res) => {
    //validate request
    if (!req.body.id || isNaN(req.body.id) || req.body.id == 0) {
        res.status(403).send(JSON.stringify({"status" : "error", "data" : {"message" : "Invalid request parameters"}}))
    } 
    else {
        const id = req.body.id
        const result = model.filter((dat) => { return dat.id == id })

        if (result.length === 0) {
            res.status(404).send(JSON.stringify({"status" : "error", "data" : {"message" : "Flight with id " + id + " not found."}}))
        }
        else {
            let index = Object.keys(model).find(key => model[key] === result[0])
            const flight = model[index]
            
            flight.title = (!req.body.title) ? flight.title : req.body.title
            flight.time = (!req.body.time) ? flight.time : req.body.time
            flight.price = (!req.body.price) ? flight.price : req.body.price
            flight.date = (!req.body.date) ? flight.date : req.body.date
            res.status(200).send(JSON.stringify({"status" : "success", "data" : {"message" : "Flight with id " + id + " updated successfully", "id" : id}}))
        } 
     
    }
}

//delete flight controller
exports.deleteFlight = (req, res) => {
    if (!req.body.id || isNaN(req.body.id) || req.body.id == 0) {
        res.status(403).send(JSON.stringify({"status" : "error", "data" : {"message" : "Invalid request parameter"}}))
    } 
    else {
        const id = req.body.id
        const result = model.filter((dat) => { return dat.id == id })

        if (result.length === 0) {
            res.status(404).send(JSON.stringify({"status" : "error", "data" : {"message" : "Flight with id " + id + " not found."}}))
        }
        else {
            let index = Object.keys(model).find(key => model[key] === result[0])
            model.splice(index ,1)
            res.status(200).send(JSON.stringify({"status" : "success", "data" : {"message" : "Flight with id " + id + " deleted", "id" : id}}))
        }
        
    }
}


