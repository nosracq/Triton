const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

/* Setup DB Connection */
const DB_NAME = 'triton_test'
mongoose.connect('mongodb://localhost/triton_test')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('Connected to database!')
})

/* DB Schemas */
var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String
})

/* Models */
var User = mongoose.model('User', userSchema);

/* Routes */
router.get('/', (req, res) => {

})

module.exports = router
