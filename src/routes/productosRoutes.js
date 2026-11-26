
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
import {deleteProductById, getProdctById, getProducts, createProduct,  updateProductById} from "../controller/productoController.js";

// ========================================
// 2. CREAR EL ROUTER
// ========================================

// express.Router() nos permite crear un sistema de rutas.
// Asi, podemos organizar las rutas en archivos separados en lugar de tenerlas todas en app.js.
const routerProductos = express.Router();


// ========================================
// 3. DEFINIR LAS RUTAS
// ========================================

// GET "/" 
// Atiende las peticiones GET que llegan a la página principal.
// Ejecuta el controlador getIndex.
//routerProductos.get("/", getIndex);


// GET "/productos"
// Atiende las peticiones GET que llegan a la url /productos.
// Ejecuta el controlador getProductos.
routerProductos.get("/", getProducts);

// GET "/productos/:id"
routerProductos.get("/:id", getProdctById)

// POST "/productos"
routerProductos.post("/", createProduct);

// PUT "/producto/:id"
routerProductos.put("/:id", updateProductById)

// DELETE "/producto/:id"
routerProductos.delete("/:id", deleteProductById)

export default routerProductos;
