// ========================================
// CONTROLADOR DE LA PÁGINA PRINCIPAL
// ========================================

// Exportamos la función getIndex para poder utilizarla
// desde nuestro archivo publicRoutes.js donde la importaremos
// req (request): contiene la información de la petición que recibimos del cliente.
// res (response): nos permite enviar una respuesta al cliente.
// Cuando recibimos una petición GET a "/", ejecutamos este controlador.
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
// Dentro de .json() como hemos comentado enviamos un objeto JavaScript
// que Express convierte automáticamente a formato JSON.
// Es Array con los productos (objetos) que queremos devolver al cliente, procedera de bd
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
    // obtener el id
    // console.log(req.params);
    //en el router tengo servicios/:id y si tuviera ademas :/cat tambieen estaria como parametro
    const id = req.params.id; // Recogeremos los datos que nos envían en el body desde el front
    // req.body, req.header...., req.query
    // llamada a la bd y solicita el servicio por su id
    // db.servicios.find(_id:id)
    // si no existo 404
    // const servicioEncontrado = await Servicio.findById(id);

    // 2. Simulamos una búsqueda en la base de datos
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
    // console.log(req.body);
    // const servicio = req.body;
    // llamo a base de datos y crear nuevo servicios con los datos del objeto
    // comprobar si el producto existe
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
    // obtener el id
    // console.log(req.params);

    //en el router tengo servicios/:id y si tuviera ademas :/cat tambieen estaria
    const id = req.params.id; // el id que se pase en la url de postma
    // Recogeremos los datos que nos envía el front en el body algo asi ya lo veremos
    // const { id, nombre } = req.body;

    // para caputrar querys seria con req.query ?page=1&

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