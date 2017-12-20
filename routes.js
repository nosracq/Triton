const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
mongoose.Promise = global.Promise


const User = require('./models/user')

/* Setup DB Connection */
const DB_NAME = 'triton_test'
mongoose.connect('mongodb://localhost/triton_test')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('Connected to database!')
})

// /* DB Schemas */
// var userSchema = mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     userName: String,
//     password: String
// })

// /* Models */
// var User = mongoose.model('User', userSchema);
// create a user a new user
// var testUser = new User({
//   username: 'jmar777',
//   password: 'Password'
// })
// console.log(testUser)
// save user to database
// testUser.save(function(err, testUser) {
//   console.log('Saving ', testUser)
//   if (err) throw err
// })

// fetch user and test password verification
User.findOne({ username: 'jmar777' }, function(err, user) {
  if (err) throw err

  // // test a matching password
  // user.comparePassword('Password123', function(err, isMatch) {
  //     if (err) throw err
  //     console.log('Password123:', isMatch) // Password123: true
  // })

  // // test a failing password
  // user.comparePassword('123Password', function(err, isMatch) {
  //     if (err) throw err
  //     console.log('123Password:', isMatch); // 123Password: false
  // })
})

/* Routes */
router.post('/login', (req, res) => {
  var username = req.body.username
  var password = req.body.password

  // console.log('password in post', password)

  User.findOne({ username: username }, (err, user) => {
    if (err) throw err

    // if (!user) console.log("That user does not exist")
    // else if (!user.comparePassword(password, function(err, isMatch) {
    //   console.log("Wrong password")
    // test a matching password
    user.comparePassword(password, (err, isMatch) => {
      if (err) throw err;
      // console.log(password, isMatch); // -> Password123: true
    })

  //   // test a failing password
  //   user.comparePassword('123Password', function(err, isMatch) {
  //     if (err) throw err;
  //     console.log('123Password:', isMatch); // -> 123Password: false
  // })
  })
  res.json({message: 'recieved'})
})

module.exports = router
