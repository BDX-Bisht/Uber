const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlacklist = await blacklistTokenModel.findOne({ token });

    if (isBlacklist) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized", error: error });
    }
};

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization;

    if (!token) {
        res.status(401).json({ message: "Unauthorized" });
    }

    const isBlackList = await blacklistTokenModel.findOne({ token });
    if (isBlackList) {
        res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};
