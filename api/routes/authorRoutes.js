import express from 'express';
import { authorController } from '../controllers/index.js';

const router = express.Router();

router.route('/authors/:id/books').post(authorController.createBookForAuthor);

export default router;
