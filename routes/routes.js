import express from 'express';
import { addBook, deleteBook, getBookDetails, updateBookDetails, viewAllBooks } from '../controllers/bookController.js';

const router = express.Router();

router.post("/add",addBook);
router.get("/", viewAllBooks);
router.get("/:id",getBookDetails);
router.put("/update/:id",updateBookDetails);
router.delete("/delete/:id",deleteBook);

export default router;