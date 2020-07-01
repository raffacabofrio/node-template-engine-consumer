const express = require('express')
const app = express()
require('chop-template-engine')

app.get('/', function (req, res) {
  var html = require('./templates/form.chop')({ name: 'raffa', age: 41 })
  res.send(html)
})

console.log('app running and listening on http://localhost:3000')
app.listen(3000)
