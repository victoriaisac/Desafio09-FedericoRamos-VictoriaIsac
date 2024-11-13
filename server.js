const dotenv = require('dotenv');
dotenv.config();

//importamos la app
const app = require('./app');

//variable de entorno 
const PORT = process.env.PORT

const server = app.listen(PORT, ()=> {
    console.log(`Servidor en el puerto http://localhost:${PORT}`);
});

server.on('error',error => console.log(`Error en: ${error}`)

)