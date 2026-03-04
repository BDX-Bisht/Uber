const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const { createCaptain } = require("../services/captain.service");

module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(401).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const isAlreadyCaptainExist = await captainModel.findOne({ email });

    if (isAlreadyCaptainExist) {
        res.status(400).json({ message: "Captain is already exist" });
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = await createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();

    res.status(201).json({ captain, token });
};
