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
app.get("/index", (req,res) => {
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

//errores

app.get("/error", function (req, res) {
    throw "BROKEN";
});// ruta de error 500 

    app.use((err, req, res, next) => {
        res.type("text/plain");
        res.status(500);
        res.send("ERROR 500 - Servidor Roto");
    });

    app.use((req, res) => {
        console.log("404");
        res.type("text/plain");
        res.status(404);
        res.send("ERROR 404-No encontrado");
    });

//exportamos la app
module.exports = app;
