import express from "express";
import "dotenv/config";
import helmet from "helmet" //  añadir cabeceras HTTP de seguridad npm i helmet   

import productosRoutes from "./routes/productosRoutes.js";
import serviciosRoutes from "./routes/serviciosRoutes.js";

// ========================================
// 1. CREAR LA APLICACIÓN
// ========================================

const app = express();
app.use (helmet()) // seguridad usamos helmet

// ========================================
// 2. CONFIGURAR EL PUERTO
// ========================================
const port = process.env.PORT || 3000;

// ========================================
// 3. CONFIGURAR LOS MIDDLEWARE
// ========================================

app.use(express.urlencoded())

app.use(express.json());


// ========================================
// 4. CONECTAR LAS RUTAS
// ========================================

app.use("/api/v1/productos", productosRoutes );
app.use("/api/v1/servicios", serviciosRoutes );

// ========================================
// 5. INICIAR EL SERVIDOR
// ========================================

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
