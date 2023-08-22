const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts')


app.set('view engine', 'ejs')
app.use(expressLayout)
app.use('/img', express.static('img'))
app.use(express.static("public"));

app.get('/', (req,res) => {
	res.render('index', {title : 'halaman index', layout: 'layouts/main-layout'})
})
app.get('/about', (req,res) => {
	res.render('about', {title : 'halaman about', layout: 'layouts/main-layout'})
})
app.get('/contact', (req,res) => {
	res.render('contact', {title : 'halaman contact', layout: 'layouts/main-layout'})
})
app.listen(3000,  () => {
	console.log('hai hallo')
})