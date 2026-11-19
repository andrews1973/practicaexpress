
// ========================================
// 1. CONTROLADOR DE LA PÁGINA PRINCIPAL
// ========================================

// Exportamos la función getIndex para poder utilizarla
// desde nuestro archivo publicRoutes.js.
//
// req (request): contiene la información de la petición
// que recibimos del cliente.
//
// res (response): nos permite enviar una respuesta al cliente.
//
// Cuando recibimos una petición GET a "/",
// ejecutamos este controlador.
export const getIndex = (req, res) => {

  // Indicamos que la petición ha sido procesada correctamente
  // mediante el código de estado HTTP 200 (OK).
  //
  // .json() envía una respuesta en formato JSON al cliente.
  res.status(200).json({
    ok: true,
    mesg: "esto es el index desde la api",
  });
};


// ========================================
// 2. CONTROLADOR PARA OBTENER PRODUCTOS
// ========================================

// Esta función se ejecuta cuando recibimos una petición
// GET a la ruta "/productos".
export const getProductos = (req, res) => {

  // Enviamos una respuesta HTTP 200 (OK).
  //
  // Dentro de .json() enviamos un objeto JavaScript
  // que Express convierte automáticamente a formato JSON.
  res.status(200).json({

    // Indicamos que la operación se ha realizado correctamente.
    ok: true,

    // Mensaje informativo para el cliente.
    mesg: "esto es productos",

    // Array con los productos que queremos devolver al cliente.
    // De momento son datos de ejemplo, no proceden de una base de datos.
    articulos: [
      {
        id: 1,
        nombre: "articulo1",
        descripcion: "des arti 1",
      },
      {
        id: 2,
        nombre: "articulo2",
        descripcion: "des arti 2",
      },
    ],
  });
};


// ========================================
// 3. CONTROLADOR PARA CREAR PRODUCTOS
// ========================================

// Esta función se ejecuta cuando recibimos una petición
// POST a la ruta "/productos".
//
// Normalmente utilizaremos POST para enviar información
// desde el cliente al servidor y crear un nuevo producto.
export const postProductos = (req, res) => {

  // Enviamos el código de estado HTTP 201 (Created).
  // Este código indica que se ha creado un recurso.
  //
  // De momento solo estamos enviando una respuesta de ejemplo.
  // Todavía no estamos guardando ningún producto.
  res.status(201).json({
    ok: true,
    msg: "Has hecho un post de un producto",
  });
};


// ========================================
// 4. CONTROLADOR PARA OBTENER SERVICIOS
// ========================================

// Esta función se ejecuta cuando recibimos una petición
// GET a la ruta "/servicios".
export const getServicios = (req, res) => {

  // Indicamos que la petición se ha procesado correctamente.
  // Enviamos al cliente una respuesta en formato JSON.
  res.status(200).json({

    // Indicamos que la operación ha sido correcta.
    ok: true,

    // Mensaje informativo.
    msg: "Esto es servicios",

    // Array con los servicios disponibles.
    // Son datos de ejemplo definidos directamente en el código.
    servicios: [
      {
        id: 1,
        nombre: "Servicio 1",
      },
      {
        id: 2,
        nombre: "Servicio 2",
      },
    ],
  });
};
