const express = require('express')
const app = express()

app.set("view engine","ejs")
app.use ( express.static('./public'))
app.get('/', function (req, res) {
  res.render('index',{portfolio:"saumya"})
})
app.get('/contact', function (req, res) {
  res.render('contact',{name:"saumya"})
})


app.listen(3000)

//template engines=>   markup style  which will convert n html later  ejs  , pug,jade,handlebars