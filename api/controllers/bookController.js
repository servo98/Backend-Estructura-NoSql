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

const getAll = async () => {};
const getById = async () => {};
const updateById = async () => {};
const deleteById = async () => {};

export { create, getAll, getById, updateById, deleteById };
