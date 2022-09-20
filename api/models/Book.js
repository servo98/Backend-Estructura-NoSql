import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  editorial: String,
  publishDate: Date,
  pages: Number,
  isbn: String,
  price: Number,
});

export default mongoose.model('Book', bookSchema);
