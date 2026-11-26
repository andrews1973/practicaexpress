// PRIMEROS PASOS EN EL PROYECTO:
// pnpm init -y inicializadomos el proyecto node, Y se crea el archivo package.json
// "main": "src/app.js" con su punto de entrada y dentro de script "start": "node src/app.js" y nodemon,
// y hariamos npm run dev en vez de npm start para que escuche los cambios
// creamos el servidor npm i express dotenv , dotenv para variables de entorno
// lo vemos en dependencias del package.json lo que hemos instalado 
// (en global instalamos nodemon para refrescar el server npm install -g nodemon )
// creamos .env y .gitignore dejando fuera node_modules y .env con las variable de entorno puertos
// git add, git commit, git branch develop, git checkout develop
// Importamos Express, el framework que utilizaremospara crear nuestro servidor y gestionar las peticiones HTTP. 
// En la docu pone que se importa asi import express from "express";
// importamos dotenv y creamos la variable port junto con app.listen para escuchar el puerto
// en la docu pone que se importa asi import "dotenv/config";

// Cargamos las variables de entorno definidas en el archivo .env.
// Así podemos acceder a ellas mediante process.env. y la import se hace asi

import express from "express";
import "dotenv/config";
import helmet from "helmet"

// Importamos el archivo que contiene las rutas públicas
import publicRoutes from "./routes/publicRoutes.js";


// ========================================
// 1. CREAR LA APLICACIÓN
// ========================================

// Ejecutamos express() para crear nuestra aplicación.
// La variable app será la encargada de gestionar las peticiones que lleguen a nuestro servidor.
const app = express();
app.use (helmet()) // seguridad

// ========================================
// 2. CONFIGURAR EL PUERTO
// ========================================

// Obtenemos el puerto definido en el archivo .env. que leemos de la variable de entorno
// process.env.PORT permite acceder a las variables de entorno medinate metodos .env y .PORT
// el .env no se descarga de gitthub hay que crearlo con las variables 
// Si PORT no está definido, utilizamos el puerto 3000 como valor alternativo.
const port = process.env.PORT || 3000;

// ========================================
// 3. CONFIGURAR LOS MIDDLEWARE
// ========================================

// Middleware para interpretar los datos JSON que recibimos
// en las peticiones HTTP. Tendremos dos
//
// Por ejemplo, cuando desde Postman enviamos un POST
// con un objeto JSON, Express lo transforma en un objeto
// JavaScript accesible mediante req.body.
//
// Debe ejecutarse antes de las rutas para que estas
// puedan acceder a los datos recibidos.

// parse para formularios application xxx-form-unrlencoded
// body-parser ya viene instalado en espress por eso hacemos express.urlencoded() y express.json()
app.use(express.urlencoded())
// parse aplication json

app.use(express.json());


// ========================================
// 4. CONECTAR LAS RUTAS
// ========================================
// aqui primero podriamos hacer pruebas directamente app.js, p.ej. 
// app.get ('urlBase', (req,resp)=>{reps.json({ok:true, mensaje:"todo bien"})})
// pero luego la primera parte app.get ('urlBase', va a publicRoutes y la seguda
// (req,resp)=>{reps.json({ok:true, mensaje:"todo bien"})}) va a publicControllers.js
// y aqui solo nos quedamos con esto: app.use("/", publicRoutes); esto es otro middleware

// Lo que hace es indicar a Express que utilice las rutas definidas en el archivo publicRoutes.js.
// El primer argumento "/" indica el prefijo de las rutas, la ruta base comun de todas.
// Tambien en lugar del "/" podriamos usar p. ej. <urlBase>/api/V1/ o lo que sea

// Cuando llegue una petición a alguna direccion, 
// Express buscará la ruta correspondiente en publicRoutes.js.

app.use("/", publicRoutes);



// ========================================
// 5. INICIAR EL SERVIDOR
// ========================================

// app.listen() pone en marcha nuestro servidor
// y lo deja escuchando peticiones en el puerto indicado.
// El segundo argumento es una función callback que se ejecuta
// cuando el servidor empieza a funcionar correctamente.
    // De momento mostramos un mensaje en la terminal para saber
    // que el servidor está iniciado y dónde podemos acceder.
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
