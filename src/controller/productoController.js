// ========================================
// CONTROLADOR DE LA PÁGINA PRINCIPAL
// ========================================
export const getIndex = (req, res) => {
  res.status(200).json({
    ok: true,
    mesg: "esto es el index desde la api",
  });
};

// ========================================
// CONTROLADOR PARA OBTENER PRODUCTOS
// ========================================

export const getProducts = async (req, res) => {
  try {
    res.status(200).json({
      ok: true,
      mesg: "esto es productos",
      productos: [
        {
          id: 1,
          nombre: "producto1",
          descripcion: "des prod 1",
        },
        {
          id: 2,
          nombre: "producto2",
          descripcion: "des prod 2",
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

    const productoEncontrado = {
      id: id,
      nombre: "Desarrollo web",
      precio: 150,
    };

    // 3. Simulamos que no encontramos el servicio
    if (!productoEncontrado) {
      return res.status(404).json({
        ok: false,
        msg: "Producto no encontrado",
      });
    }

    // 4. Devolvemos el servicio encontrado
    res.status(200).json({
      ok: true,
      msg: `Has pedido el producto ${id}`,
      productoEncontrado,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error del servidor",
    });
  }
};

// ========================================
// CONTROLADOR PARA CREAR productos
// ========================================
// 401 si existe comprobar que exista el producto

export const createProduct = async (req, res) => {
  try {
    /*
    if (!true){
          res.status(401).json({
          ok: true,
          msg: "el servicio ya exite",
        })
      }
    */
    res.status(201).json({
      ok: true,
      msg: "Has creado de un producto",
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

export const updateProductById = async (req, res) => {
  try {
    const id = req.params.id; // el id que se pase en la url de postma

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
    const id = req.params.id;

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