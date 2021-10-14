const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const API_KEY = process.env.API_KEY; 
const router = express.Router();
const path = require('path');
var exphbs = require('express-handlebars');
const axios = require('axios');

app.engine('handlebars', exphbs());

app.set('view engine', 'handlebars');

app.get('/', async function (req, res) {
    res.render('home', {
        noticias: await getAll()
    });
})

if (process.env.NODE_ENV === 'dev') {
    require('dotenv').config();
}

function getAll() {
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`;
    return axios.get(url).then(response => {
        console.log(response.data.articles);
            return response.data.articles
        }
    )}

    const port = process.env.PORT;

    app.listen(port, () => {
        console.log('App is listening in port ' + port);
    });