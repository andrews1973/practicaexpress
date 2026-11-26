// ========================================
// CONTROLADOR PARA OBTENER SERVICIOS
// ========================================

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
