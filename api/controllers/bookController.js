import { Book } from '../models/index.js';
/**
 * req.body
 * req.headers
 * req.params
 * req.query
 */

const create = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    return res.json({
      msg: 'Libro creado satisfactoriamente',
      book,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al intentar crear libro',
      error,
    });
  }
};

const getAll = async (_, res) => {
  try {
    const books = await Book.find();
    return res.json({
      msg: 'Libros encontrados',
      books,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al consultar libros',
      error,
    });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({
        msg: 'Libro no encontrado',
      });
    }
    return res.json({
      msg: 'Libro encontrado',
      book,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al obtener libro por id',
      error,
    });
  }
};

const updateById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: `Libro ${book.title} actualizado`,
      book,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al actualizar libro',
    });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    await Book.findByIdAndRemove(id);
    return res.json({
      msg: 'Libro libro borrado',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al borrar libro por id',
      error,
    });
  }
};

export { create, getAll, getById, updateById, deleteById };
