const express = require("express")
const {Router} = require('express')
const router = Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const keys = require("config");


// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route POST movies.js/users/register
// @desc Register user
// @access Public


router.post("/register", (req, res) => {

    //Form validation
    const {errors, isValid} = validateRegisterInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({email:req.body.email}).then(user=>{
        if(user){
            return res.status(400).json({email:"Email already exists"});
        } else{
            const newUser = new User({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                registerDate: req.body.registerDate,
                movies: req.body.movies
            });

            // Hash password before storing in database
            const rounds  = 10;
            bcrypt.genSalt(rounds, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            res.json(user)
                        })
                        .catch(err => console.log(err));
                });
            });
        }

    });
});


// @route POST movies.js/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login",(req,res) => {

    //Form Valdiation
    const {errors, isValid} = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    //Find user by Email
    User.findOne({email}).then(user=>{
        if(!user){
            return res.status(404).json({ emailnotfound: "Email not found" });
        }

        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                };

                // Sign token
                jwt.sign(
                    payload,
                    keys.jwtSecret,
                    {
                        expiresIn: 31556926
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: token,
                            userId: user.id,
                            user
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});



module.exports = router