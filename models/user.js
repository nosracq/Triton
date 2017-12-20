const mongoose = require('mongoose')
mongoose.Promise = global.Promise


const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
SALT_WORK_FACTOR = 10

var UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});

UserSchema.pre('save', function(next) {
    var user = this

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next()

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err)

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err)


            // override the cleartext password with the hashed one
            user.password = hash
            next()
        })
    })
})

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        // console.log('passed password', candidatePassword)
        if (err) return cb(err)
        cb(null, isMatch)
    })
}
// UserSchema.methods.comparePassword = function(password) {
//     return bcrypt.compareSync(password, this.password)
// }

module.exports = mongoose.model('User', UserSchema);
