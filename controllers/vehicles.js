let vehicles = require("../vehicles");


exports.list = (req,res) => {
    return response.json(vehicles);
}

exports.show = (req,res) => {
    let id = vehicles.filter(i => i._id == req.params.vehiclesId);
res.json(id);
}

exports.create = (req,res) => {
    let newVehicle = req.body;
    vehicles.push(newVehicle);
    res.json(newVehicle);
}

exports.update = (req,res) => {
    let id = vehicles.filter(i => i._id == req.params.vehiclesId);
        vehicle.make = body.make;
        response.json(vehicle);

}

exports.remove = (req,res) => {
    let vehicle = vehicles.find(i => i._id == req.params.vehiclesId);
    vehicle.isActive = false;
    response.send("Deleted")
}