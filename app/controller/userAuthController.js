
var User  = require('../models/user');

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