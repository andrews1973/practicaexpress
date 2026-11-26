// ========================================
// CONTROLADOR PARA OBTENER SERVICIOS
// ========================================

// Esta función se ejecuta cuando recibimos una petición de tipo GET a la ruta "/servicios".
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
// POST a la ruta "/servicio".
// Normalmente utilizaremos POST para enviar información desde el cliente al servidor y crear un nuevo producto.
// Enviamos el código de estado HTTP 201 (Created). Este código indica que se ha creado un recurso.
// tambien habria que comprobar si existe el servicio y entonces no dejara crearlo devolviendo 401 etc...
export const createService = async (req, res) => {
  try {
    res.status(201).json({
      ok: true,
      msg: "Has creado un servicio",
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
// comprobar que exista el servicio
export const getServiceByid = async (req, res) => {
  try {
    const id = req.params.id;

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
    const id = req.params.id;

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
    const id = req.params.id;

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
