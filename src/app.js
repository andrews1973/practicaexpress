
// Importamos Express, el framework que utilizaremos
// para crear nuestro servidor y gestionar las peticiones HTTP.
import express from "express";

// Cargamos las variables de entorno definidas en el archivo .env.
// Así podemos acceder a ellas mediante process.env.
import "dotenv/config";

// Importamos el archivo que contiene las rutas públicas
// de nuestra aplicación (productos, servicios, etc.).
import publicRoutes from "./routes/publicRoutes.js";


// ========================================
// 1. CREAR LA APLICACIÓN
// ========================================

// Ejecutamos express() para crear nuestra aplicación.
// La variable app será la encargada de gestionar las peticiones
// que lleguen a nuestro servidor.
const app = express();


// ========================================
// 2. CONFIGURAR EL PUERTO
// ========================================

// Obtenemos el puerto definido en el archivo .env.
// process.env.PORT permite acceder a las variables de entorno.
//
// Si PORT no está definido, utilizamos el puerto 3000
// como valor alternativo.
const port = process.env.PORT || 3000;


// ========================================
// 3. CONFIGURAR LOS MIDDLEWARE
// ========================================

// Middleware para interpretar los datos JSON que recibimos
// en las peticiones HTTP.
//
// Por ejemplo, cuando desde Postman enviamos un POST
// con un objeto JSON, Express lo transforma en un objeto
// JavaScript accesible mediante req.body.
//
// Debe ejecutarse antes de las rutas para que estas
// puedan acceder a los datos recibidos.
app.use(express.json());


// ========================================
// 4. CONECTAR LAS RUTAS
// ========================================

// Indicamos a Express que utilice las rutas definidas
// en el archivo publicRoutes.js.
//
// El primer argumento "/" indica el prefijo de las rutas.
// Por ejemplo:
// GET  /productos
// GET  /servicios
// POST /productos
//
// Cuando llegue una petición a alguna de estas direcciones,
// Express buscará la ruta correspondiente en publicRoutes.
app.use("/", publicRoutes);


// ========================================
// 5. INICIAR EL SERVIDOR
// ========================================

// app.listen() pone en marcha nuestro servidor
// y lo deja escuchando peticiones en el puerto indicado.
//
// El segundo argumento es una función callback que se ejecuta
// cuando el servidor empieza a funcionar correctamente.
app.listen(port, () => {

    // Mostramos un mensaje en la terminal para saber
    // que el servidor está iniciado y dónde podemos acceder.
    console.log(`Servidor escuchando en http://localhost:${port}`);

});
