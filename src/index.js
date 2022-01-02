const express = require('express')
//Handlebars import
const handlebars = require('express-handlebars')
const hbs = handlebars.create({ extname: '.hbs' })
//
const morgan = require('morgan')
const path = require('path')

const app = express()
const port = 3000

//Static files
app.use(express.static(path.join(__dirname, './public')))

//HTTP logger
app.use(morgan('dev'))

//Template engine
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './resources/views'))
console.log('PATH: ', path.join(__dirname, './resources/views'))

//Code
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

//Server local
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

