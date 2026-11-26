
// Importamos Express para poder crear y gestionar las rutas de nuestra aplicación.
// const router = express.Router();
// tambien podriamos desestructurar y sustituir import express por import {Router}
// al final del todo exportamos tambien router para poder usarlo en app
// AQUI ES DONDE VAN LOS GET POST PUT DELETE (CRUD), CON SUS URLS Y SUS LLAMADAS A LOS CONTROLADORES
import express from "express";

// ========================================
// 1. IMPORTAR LOS CONTROLADORES
// ========================================

// Importamos las funciones (desestructurando) que contienen la lógica del archivo publicControllers.js
// Y que se ejecutarán cuando recibamos una petición
// Cada controlador se encargará de responder
// a una ruta determinada, se ponen de forma automatica si hacemos intro en vsc al definir rutas
import {getIndex, deleteProductById, deleteServiceById, getProdctById,getProducts,getServiceByid,getServices, createProduct, createService, updateProductById, updateServiceById} from "../controller/publicControllers.js";

// ========================================
// 2. CREAR EL ROUTER
// ========================================

// express.Router() nos permite crear un sistema de rutas.
// Asi, podemos organizar las rutas en archivos separados en lugar de tenerlas todas en app.js.
const router = express.Router();


// ========================================
// 3. DEFINIR LAS RUTAS
// ========================================

// GET "/" 
// Atiende las peticiones GET que llegan a la página principal.
// Ejecuta el controlador getIndex.
router.get("/", getIndex);


// GET "/productos"
// Atiende las peticiones GET que llegan a la url /productos.
// Ejecuta el controlador getProductos.
router.get("/productos", getProducts);

// GET "/productos/:id"
router.get("/productos/:id", getProdctById)

// POST "/productos"
router.post("/productos/", createProduct);

// PUT "/producto/:id"
router.put("/productos/:id", updateProductById)

// DELETE "/producto/:id"
router.delete("/productos/:id", deleteProductById)


// GET "/servicios"
router.get("/servicios", getServices);

// GET "/servicios/:id"
router.get("/servicios/:id", getServiceByid)

// POST "/servicio"
router.post("/servicios/", createService);

// PUT "/servicio/:id"
router.put("/servicios/:id", updateServiceById)

// DELETE "/servicios/:id"
router.delete("/servicios/:id", deleteServiceById)

// ========================================
// 4. EXPORTAR EL ROUTER
// ========================================

// Exportamos el router para poder importarlo y utilizarlo desde app.js.
export default router;
