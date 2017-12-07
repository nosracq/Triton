//first we import our dependencies…
// require('babel-register')({
//     presets: [ '2015' ]
//  })
const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
//and create our instances
const app = express()
//set our port to either a predetermined port number if you have set
//it up, or 3001
//const port = process.env.API_PORT || 3001
//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
// app.use(function(req, res, next) {
//  res.setHeader('Access-Control-Allow-Origin', '*')
//  res.setHeader('Access-Control-Allow-Credentials', 'true')
//  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
//  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
//and remove cacheing so we get the most recent comments
//  res.setHeader('Cache-Control', 'no-cache')
//  next()
// })
//now we can set the route path & initialize the API
// router.get('/', function(req, res) {
//  res.json({ message: 'API Initialized!'})
// })

//Use our router configuration when we call /api
app.use('/api', routes)

// this is the from the food tutorial
app.set("port", process.env.PORT || 3001)

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

app.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'})
 })

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`) // eslint-disable-line no-console
  })
