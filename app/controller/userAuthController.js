
// var User  = require('../models/user');
   var mongoose = require('mongoose'),   
      jwt    = require('jsonwebtoken'),
      config = require('../config'),
      bcrypt = require('bcrypt'),
      User = mongoose.model('User')
      salt = bcrypt.salt


exports.register = function(req, res , next ) {
      var newUser = new User(req.body);
      newUser.hash_password = bcrypt.hashSync(req.body.password, salt)
      newUser.save(function(err,user){
            if(err){
                  return res.status(400).send({
                        message: err
                  })
            }else {
                  user.hash_password = undefined;
                  return res.json(user)
            }
      })
}

exports.sign_in = function(req, res, next) {
      User.findOne({
        email: req.body.email
      }, function(err, user) {
        if (err) throw err;
        if (!user) {
          res.status(401).json({ message: 'Authentication failed. User not found.' });
        } else if (user) {
          if (!user.comparePassword(req.body.password)) {
            res.status(401).json({ message: 'Authentication failed. Wrong password.' });
          } else {
            return res.json({token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'RESTFULAPIs')});
          }
        }
      });
};

exports.loginRequired = function(req, res, next) {
      if (req.user) {
        next();
      } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
      }
};



// exports.login = (req, res , next) => {
//       /// need to refactor to register user and login 
//     User.create({
//       name: req.body.name, 
//       password: req.body.password,
//       admin: req.body.admin 
//     })

//     console.log('User saved successfully');
//     res.json({ success: true }); 
    
// }

exports.users = (req, res, next) => {
      User.find({}, function(err, users) {
            res.json(users);
      })  
}

// exports.authenticate = (req, res, next) => {
//       console.log(req.body.name)
//       User.findOne({
//             name: req.body.name
//       }, function(err, user){
//             if(err) throw err 
//             if(!user) {
//                   res.json({ success: false, message: 'Authentication failed. User not found.' });
//             } else if (user) {
//                   if (user.password != req.body.password) {
//                         res.json({ success: false, message: 'Authentication failed. Wrong password.' });
//                       } else {
//                     const payload = {
//                       admin: user.admin 
//                     };
//                   var token = jwt.sign(payload, config.secret, {
//                           expiresIn: 1440 
//                   });

//                   res.json({
//                           success: true,
//                           message: 'Enjoy your token!',
//                           token: token
//                   });
//                   }  
//             }
//       })
// }