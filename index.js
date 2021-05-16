const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = 3000


const spath = path.join(__dirname, '/src');
const vpath = path.join(__dirname, '/templates/views');
const ppath = path.join(__dirname, '/templates/partials');

//set template engine
app.set('view engine', 'hbs');

//set path of views
app.set('views', vpath);

//register partial
hbs.registerPartials(ppath);

//use of static things
app.use(express.static(spath));




//routing
app.get('/', (req, res) => {
    res.status(200).render('index');
});
app.get('/about', (req, res) => {
    res.status(200).render('about');
});

app.get('/weather', (req, res) => {
    res.status(200).render('weather');
});

app.get('*', (req, res) => {
    res.status(404).render('error');
});





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});