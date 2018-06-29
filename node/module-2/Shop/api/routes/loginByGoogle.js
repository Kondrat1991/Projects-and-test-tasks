const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const User = require('../models/users');
const Social = require('../models/socialUser');
const jwt = require('jsonwebtoken');

let userGoogle = () => {
    passport.use(new GoogleStrategy({
            clientID: '224568268045-jo32jfmhqhm6pqgn9epm7agoq7lp9r8a',
            clientSecret: '7wHc4A2w2rVz2yCPKK5bhsZT',
            callbackURL: "http://localhost:3000/users/login/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            console.log('check profile', profile);
            let data = profile._json;

            Social.findOne({id: data.id})
                .exec()
                .then(user => {
                    if (!user) {
                        const newUser = new Social({
                            id: data.id,
                            displayName: data.displayName,
                            provider: data.provider
                        });
                        newUser.save();
                        done(null, newUser);
                    }

                })
                .catch(err => {
                    console.log(err);
                })
        }
    ));
};

module.exports = userGoogle;