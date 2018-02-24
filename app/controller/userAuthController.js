
var User  = require('../models/user');
var jwt    = require('jsonwebtoken');
var config = require('../config'); 


exports.login = (req, res , next) => {
      /// need to refactor to register user and login 
    User.create({
      name: req.body.name, 
      password: req.body.password,
      admin: req.body.admin 
    })

    console.log('User saved successfully');
    res.json({ success: true }); 
    
}

exports.users = (req, res, next) => {
      User.find({}, function(err, users) {
            res.json(users);
      })  
}

exports.authenticate = (req, res, next) => {
      console.log(req.body.name)
      User.findOne({
            name: req.body.name
      }, function(err, user){
            if(err) throw err 
            if(!user) {
                  res.json({ success: false, message: 'Authentication failed. User not found.' });
            } else if (user) {
                  if (user.password != req.body.password) {
                        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                      } else {
                    const payload = {
                      admin: user.admin 
                    };
                  var token = jwt.sign(payload, config.secret, {
                          expiresIn: 1440 
                  });

                  res.json({
                          success: true,
                          message: 'Enjoy your token!',
                          token: token
                  });
                  }  
            }
      })
}