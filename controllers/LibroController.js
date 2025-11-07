
const Libro = require('../models/libro');
const { Op } = require('sequelize');

exports.crearLibro = async (req, res) => {
  try {
    const nuevoLibro = await Libro.create(req.body);
    res.status(201).json({ 
      msg: "Libro creado con éxito", 
      data: nuevoLibro 
    });
  } catch (error) {
    res.status(500).json({ 
      msg: "Error al crear el libro", 
      error: error.message 
    });
  }
};

exports.obtenerLibros = async (req, res) =>{
 try{
   const libritos = await Libro.findAll();
   console.log("libritos");
   res.status(200).json({
    msg:"Lista de libros obtenida con éxito",
    data: libritos
   });
  }
catch(error){
  res.status(500).json({
    msg:"error al obtener los libros",
    error: error.message
  })
}
};

exports.actualizarLibro = async (req, res)=>{
  const {id}= req.params;
  try{
     const libroActualizado = await Libro.update(req.body,{where: { id :id }})
     res.status (200). json({
      msg:"Libro actualizado con éxito",
      data: libroActualizado
     })
  }catch(error){
    res.status(500).json({
      msg:"Error al actualizar el libro",
      error: error.message
    })
  }
}

exports. eliminnarLibro = async (req, res)=>{
  const {id} =  req.params;
  try{
    await Libro.destroy({where: {id: id}})

    res.status(200).json({
      msg:"Libro borrado con éxito"
    })
    console.log("libro borrado con exito")
  }
  catch(error){
  res.status(500).json({
    msg:"error al borrar"
    , error: error.message
  })
  }
}