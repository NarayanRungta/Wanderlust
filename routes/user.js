const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const req = require("express/lib/request.js");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");
const user = require("../models/user.js");
const { render } = require("ejs");

router.route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup));

router.route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl, passport.authenticate("local", { failureFlash: true, failureRedirect: "/login" }), userController.login);

router.get("/logout", userController.logout);

router.get("/", async (req, res) => {
    res.redirect("/listings");
});

module.exports = router;