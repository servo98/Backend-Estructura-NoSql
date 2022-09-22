import { Book, Author } from '../models/index.js';

const createBookForAuthor = async (req, res) => {
  try {
    /**
     * Crear libro
     * Registrarlo en el author
     */
    // /authors/:id/books POST
    const book = await Book.create(req.body);

    const author = await Author.findById(req.params.id);

    author.books.push(book.id);

    author.name = 'pedritro';

    await author.save();
  } catch (error) {
    res.status(500).json({
      msg: 'Error al registrar libro en author',
      error,
    });
  }
};

export { createBookForAuthor };
