
// Importamos Express para poder crear y gestionar las rutas
// de nuestra aplicación.
import express from "express";


// ========================================
// 1. IMPORTAR LOS CONTROLADORES
// ========================================

// Importamos las funciones que contienen la lógica
// que se ejecutará cuando recibamos una petición.
//
// Cada controlador se encargará de responder
// a una ruta determinada.
import {
    getIndex,
    getProductos,
    getServicios,
    postProductos
} from "../controller/publicControllers.js";


// ========================================
// 2. CREAR EL ROUTER
// ========================================

// express.Router() nos permite crear un sistema de rutas
// independiente de la aplicación principal.
//
// De esta manera, podemos organizar las rutas en archivos
// separados en lugar de tenerlas todas en app.js.
const router = express.Router();


// ========================================
// 3. DEFINIR LAS RUTAS
// ========================================

// GET "/" 
// Atiende las peticiones GET que llegan a la página principal.
// Ejecuta el controlador getIndex.
router.get("/", getIndex);


// GET "/productos"
// Atiende las peticiones GET que llegan a /productos.
// Ejecuta el controlador getProductos.
router.get("/productos", getProductos);


// GET "/servicios"
// Atiende las peticiones GET que llegan a /servicios.
// Ejecuta el controlador getServicios.
router.get("/servicios", getServicios);


// POST "/productos"
// Atiende las peticiones POST que llegan a /productos.
//
// Normalmente utilizaremos POST para enviar nuevos datos
// desde el cliente al servidor, por ejemplo, para crear
// un producto.
//
// Ejecuta el controlador postProductos.
router.post("/productos", postProductos);


// ========================================
// 4. EXPORTAR EL ROUTER
// ========================================

// Exportamos el router para poder importarlo
// y utilizarlo desde app.js.
export default router;
