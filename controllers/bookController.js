import Book from "../models/book.js";

export const addBook = async (request, response) => {
  try {
    if (
      request.body.title == null ||
      request.body.author == null ||
      request.body.summary == null
    ) {
      return response
        .status(400)
        .json({ message: "Fields Required: Title, Author, Summary" });
    }
    var book = {
      title: request.body.title,
      author: request.body.author,
      summary: request.body.summary,
    };
    const newBook = new Book(book);
    await newBook.save();
    return response
      .status(201)
      .json({ message: "New book added", book: newBook });
  } catch (error) {
    console.log(`Error adding new book : ${error.message}`);
    return response.status(500).json({ message: "Cannot add new book" });
  }
};

export const viewAllBooks = async (request, response) => {
  try {
    let books = await Book.find();
    return response.status(200).json({ books: books });
  } catch (error) {
    console.log(`Error fetching all books list : ${error.message}`);
    return response.status(500).json({ message: "Cannot fetch all books" });
  }
};

export const getBookDetails = async (request, response) => {
  try {
    let bookId = request.params.id;
    console.log(bookId);
    await Book.findById(bookId)
      .then((book) => {
        return response.status(200).json({ book: book });
      })
      .catch((e) => {
        return response.status(404).json({ message: "Book not found" });
      });
  } catch (error) {
    console.log(`Error fetching book details : ${error.message}`);
    return response.status(500).json({ message: "Cannot fetch book details" });
  }
};

export const updateBookDetails = async (request, response) => {
  try {
    let bookId = request.params.id;
    let currBook = Book.findOne({ _id: bookId });
    let updatedBook = {
      title: request.body.title || currBook.title,
      author: request.body.author || currBook.author,
      summary: request.body.summary || currBook.summary,
    };
    let book = await Book.findOneAndUpdate({ _id: bookId }, updatedBook, {
      new: true,
    })
      .exec()
      .then((book) => {
        return response
          .status(200)
          .json({ message: "Book details updated successfully", book: book });
      })
      .catch((e) => {
        console.log(e);
        return response.status(404).json({ message: "Book not found" });
      });
  } catch (error) {
    console.log(`Error updating book details : ${error.message}`);
    return response
      .status(500)
      .json({ message: "Cannot updates book details" });
  }
};

export const deleteBook = async (request, response) => {
  try {
    let bookId = request.params.id;
    await Book.deleteOne({ _id: bookId }).then(data=>{
      return response.status(200).json({message:"Book Deleted Successfuly"});
    }).catch(e=>{
      return response.status(404).json({message:"Cannot delete book"});
    })
  } catch (eerror) {
    console.log(`Error deleting book : ${error.message}`);
    return response.status(500).json({ message: "Cannot delete book" });
  }
};
