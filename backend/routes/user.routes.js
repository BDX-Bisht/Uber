const express = require("express");
const { body } = require("express-validator");
const {
    registerUser,
    loginUser,
    getUserProfile,
    logoutUser,
} = require("../controllers/user.controller");
const { authUser } = require("../middlewares/auth.middleware");
const router = express.Router();

router.post(
    "/register",
    [
        body("email").isEmail().withMessage("Invalid Email"),
        body("fullname.firstname")
            .isLength({ min: 3 })
            .withMessage("First name must be atleast 3 character long"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be atleast 6 character long"),
    ],
    registerUser,
);

router.post(
    "/login",
    [
        body("email").isEmail().withMessage("Invalid Email"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be atleast 6 character long"),
    ],
    loginUser,
);

router.get("/profile", authUser, getUserProfile);

router.get("/logout", authUser, logoutUser);

module.exports = router;
