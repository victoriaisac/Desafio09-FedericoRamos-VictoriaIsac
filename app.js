//importamos los modulos de package json
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));


//handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views")); 
hbs.registerPartials(path.join(__dirname, "views/partials"))

//ruta de index
app.get("/", (req,res) => {
    res.render("index")
})

//ruta de about
app.get("/about", (req,res) => {
    res.render("about")
})

//ruta de contacto
app.get("/contacto", (req,res) => {
    res.render("contacto")
})

//exportamos la app
module.exports = app;
