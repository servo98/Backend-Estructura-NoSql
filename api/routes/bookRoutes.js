import express from 'express';

const router = express.Router();

/**
 * CREAR RUTAS DEL CRUD
 * GET /books
 * POST /books
 * PUT /books/:id
 * GET /books/:id
 * DELETE /books/:id
 */

router.route('/books').post().get();

router.route('/books/:id').put().get().delete();

export default router;
