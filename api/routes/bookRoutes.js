import express from 'express';
import { bookController } from '../controllers/index.js';

const router = express.Router();

/**
 * CREAR RUTAS DEL CRUD
 * GET /books
 * POST /books
 * PUT /books/:id
 * GET /books/:id
 * DELETE /books/:id
 */

router.route('/books').post(bookController.create).get(bookController.getAll);

router
  .route('/books/:id')
  .put(bookController.updateById)
  .get(bookController.getById)
  .delete(bookController.deleteById);

export default router;
