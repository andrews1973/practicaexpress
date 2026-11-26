
import express from "express";

// ========================================
// 1. IMPORTAR LOS CONTROLADORES
// ========================================
import {deleteServiceById, getServiceByid, getServices, createService, updateServiceById} from "../controller/sevicioController.js";

// ========================================
// 2. CREAR EL ROUTER
// ========================================
const routerServicios = express.Router();


// ========================================
// 3. DEFINIR LAS RUTAS
// ========================================
routerServicios.get("/", getServices);

routerServicios.get("/:id", getServiceByid)

routerServicios.post("/", createService);

routerServicios.put("/:id", updateServiceById)

routerServicios.delete("/:id", deleteServiceById)

// ========================================
// 4. EXPORTAR EL ROUTER
// ========================================

export default routerServicios;
