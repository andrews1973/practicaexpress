
import express from "express";

// ========================================
// 1. IMPORTAR LOS CONTROLADORES
// ========================================

import {deleteProductById, getProdctById, getProducts, createProduct,  updateProductById} from "../controller/productoController.js";

// ========================================
// 2. CREAR EL ROUTER
// ========================================

const routerProductos = express.Router();

// ========================================
// 3. DEFINIR LAS RUTAS
// ========================================

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
