
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
import {deleteServiceById, getServiceByid, getServices, createService, updateServiceById} from "../controller/sevicioController.js";

// ========================================
// 2. CREAR EL ROUTER
// ========================================

// express.Router() nos permite crear un sistema de rutas.
// Asi, podemos organizar las rutas en archivos separados en lugar de tenerlas todas en app.js.
const routerServicios = express.Router();


// ========================================
// 3. DEFINIR LAS RUTAS
// ========================================


// GET "/servicios"
routerServicios.get("/", getServices);

// GET "/servicios/:id"
routerServicios.get("/:id", getServiceByid)

// POST "/servicio"
routerServicios.post("/", createService);

// PUT "/servicio/:id"
routerServicios.put("/:id", updateServiceById)

// DELETE "/servicios/:id"
routerServicios.delete("/:id", deleteServiceById)

// ========================================
// 4. EXPORTAR EL ROUTER
// ========================================

// Exportamos el router para poder importarlo y utilizarlo desde app.js.
export default routerServicios;
