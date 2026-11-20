// ========================================
// CONTROLADOR DE LA PÁGINA PRINCIPAL
// ========================================

// Exportamos la función getIndex para poder utilizarla
// desde nuestro archivo publicRoutes.js.
// req (request): contiene la información de la petición
// que recibimos del cliente.
// res (response): nos permite enviar una respuesta al cliente.
// Cuando recibimos una petición GET a "/",
// ejecutamos este controlador.
// Indicamos que la petición ha sido procesada correctamente mediante el código de estado HTTP 200 (OK).
// .json() envía una respuesta en formato JSON al cliente.
export const getIndex = (req, res) => {
  res.status(200).json({
    ok: true,
    mesg: "esto es el index desde la api",
  });
};

// ========================================
// CONTROLADOR PARA OBTENER PRODUCTOS
// ========================================
// aqui tambien habra un llamada al base de datos, traeme todos los productos ect
// habra latencia y por tanto asysc y try catch
// Esta función se ejecuta cuando recibimos una petición
// GET a la ruta "/productos" Enviamos una respuesta HTTP 200 (OK).
// Dentro de .json() enviamos un objeto JavaScript
// que Express convierte automáticamente a formato JSON.
// Array con los productos que queremos devolver al cliente, procedera de bd
export const getProducts = async (req, res) => {
  try {
    res.status(200).json({
      ok: true,
      mesg: "esto es productos",
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
  } catch (error) {
    res.status(500).json({
      ok: true,
      msg: "error del servidor siempre 500",
    });
  }
};

// ========================================
// CONTROLADOR PARA OBTENER UN PRODUCTO POR ID
// ========================================

export const getProdctById = async (req, res) => {
  try {
    const id = req.params.id; // no haremos asi
    // Recogeremos los datos que nos envían en el body desde el front
    res.status(200).json({
      ok: true,
      msg: `Has pedido el producto ${id}`,
    });
    // throw error // para comprobar que entra en el catch
  } catch (error) {
    res.status(500).json({
      ok: true,
      msg: "error del servidor siempre 500",
    });
  }
};

// ========================================
// CONTROLADOR PARA CREAR productos
// ========================================

export const postProduct = async (req, res) => {
  try {
    res.status(201).json({
      ok: true,
      msg: "Has hecho un post de un producto",
    });
  } catch (error) {
    res.status(500).json({
      ok: true,
      msg: "error del servidor siempre 500",
    });
  }
};

// ========================================
// CONTROLADOR PARA ACTUALIZAR UN PROCUCTO
// ========================================

export const updateProductById = (req, res) => {
  try {
    const id = req.params.id; // no haremos asi
    // Recogeremos los datos que nos envían en el body
    // const { id, nombre } = req.body;

    res.status(200).json({
      ok: true,
      msg: `Has actualizado el producto ${id}`,
    });
    // throw error // para comprobar que entra en el catch
  } catch (error) {
    res.status(500).json({
      ok: true,
      msg: "error del servidor siempre 500",
    });
  }
};

// ========================================
// CONTROLADOR PARA BORRAR UN PRODUCTO
// ========================================

export const deleteProductById = async (req, res) => {
  try {
    const id = req.params.id; // no haremos asi
    // Recogeremos los datos que nos envían en el body
    // const { id, nombre } = req.body;

    res.status(200).json({
      ok: true,
      msg: `Has borrado el producto ${id}`,
    });
    // throw error // para comprobar que entra en el catch
  } catch (error) {
    res.status(500).json({
      ok: true,
      msg: "error del servidor siempre 500",
    });
  }
};

// ========================================
// CONTROLADOR PARA OBTENER SERVICIOS
// ========================================

// Esta función se ejecuta cuando recibimos una petición
// GET a la ruta "/servicios".
// Indicamos que la petición se ha procesado correctamente.
// Enviamos al cliente una respuesta en formato JSON.
// Indicamos que la operación ha sido correcta con 200 y el mensaje y el array de servicios.

export const getServices = async (req, res) => {
  try {
    res.status(200).json({
      ok: true,
      msg: "Esto es servicios",
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
  } catch (error) {
    res.status(500).json({
      ok: true,
      msg: "error del servidor siempre 500",
    });
  }
};

// ========================================
// CONTROLADOR PARA CREAR servicios
// ========================================

// Esta función se ejecuta cuando recibimos una petición del front de tipo
// POST a la ruta "/servicio". (201)
// sera asincrono habra que esperar que la bd responda por tanto, try cach
// Normalmente utilizaremos POST para enviar información desde el cliente al servidor y crear un nuevo producto.
// Enviamos el código de estado HTTP 201 (Created). Este código indica que se ha creado un recurso.
// tambien habria que comprobar si existe el servicio y no dejara crearlo 401 etc...
export const postService = async (req, res) => {
  try {
    res.status(201).json({
      ok: true,
      msg: "Has hecho un post de un servicio",
    });
  } catch (error) {
    res.status(500).json({
      ok: true,
      msg: "error del servidor siempre 500",
    });
  }
};

// ========================================
// CONTROLADOR PARA OBTENER un SERVICIO
// ========================================
// Recogemos el ID de la URL y otros parametros como nombre del servicio etc
// es decir requiero esos datos que me los manda el front y iran en el parmetro req
// y estos datos vendran en un json
// {id:1, nombre: serviciotal}, que iran en el cuerpo
// y tambien habra llamada a la bd, async
export const getServiceByid = async (req, res) => {
  try {
    const id = req.params.id; // no haremos asi
    // Recogeremos los datos que nos envían en el body desde el front
    res.status(200).json({
      ok: true,
      msg: `Has pedido el servicio ${id}`,
    });
    // throw error // para comprobar que entra en el catch
  } catch (error) {
    res.status(500).json({
      ok: true,
      msg: "error del servidor siempre 500",
    });
  }
};

// ========================================
// CONTROLADOR PARA actualizar un SERVICIO
// ========================================

export const updateServiceById = async (req, res) => {
  try {
    const id = req.params.id; // no haremos asi
    // Recogeremos los datos que nos envían en el body
    // const { id, nombre } = req.body;

    res.status(200).json({
      ok: true,
      msg: `Has actualizado el servicio ${id}`,
    });
    // throw error // para comprobar que entra en el catch
  } catch (error) {
    res.status(500).json({
      ok: true,
      msg: "error del servidor siempre 500",
    });
  }
};

// ========================================
// CONTROLADOR PARA borrar un SERVICIO
// ========================================
export const deleteServiceById = async (req, res) => {
  try {
    const id = req.params.id; // no haremos asi
    // Recogeremos los datos que nos envían en el body
    // const { id, nombre } = req.body;

    res.status(200).json({
      ok: true,
      msg: `Has borrado el servicio ${id}`,
    });
    // throw error // para comprobar que entra en el catch
  } catch (error) {
    res.status(500).json({
      ok: true,
      msg: "error del servidor siempre 500",
    });
  }
};
