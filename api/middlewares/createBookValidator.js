import joi from 'joi';

const createBookValidator = async (req, res, next) => {
  try {
    const createBookSchema = joi.object({
      title: joi.string().required(),
      editorial: joi.string().required(),
      publishedDate: joi.date().less('now').required(),
      pages: joi.number().positive().integer().invalid(0).required(),
      isbn: joi.string().required(),
      price: joi.number().positive().required(),
    });

    await createBookSchema.validateAsync(req.body);

    next();
  } catch (error) {
    res.status(400).json({
      msg: 'Error de validación al crear un libro',
      error,
    });
  }
};

export default createBookValidator;
