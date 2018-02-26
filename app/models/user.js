var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        brcrypt = require('bcrypt')

// module.exports = mongoose.model('User', new Schema({
//     name: String,
//     password: String,
//     admin: Boolean
// }));

var UserSchema = new Schema({
    fullname: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    hash_password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.comparePassword = function(password){
    return brcrypt.compareSync(password, this.hash_password);
}

mongoose.model('User', UserSchema)