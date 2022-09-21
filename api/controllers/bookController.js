import { Book } from '../models/index.js';

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

const getById = async () => {};
const updateById = async () => {};
const deleteById = async () => {};

export { create, getAll, getById, updateById, deleteById };
