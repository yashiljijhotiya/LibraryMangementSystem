const bookRepository = require('../dao/book.repository');

exports.getBooks = function () {
    const books = bookRepository.get();
    return books;
}

exports.getBookById = function (id) {
    const book = bookRepository.getById(id);
    return book;
}

exports.addBook = function (book) {
    const newBook = {
        id: book.id,
        title: book.title,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        price: book.price,
        count: book.count
    };
    return bookRepository.add(book);
}

exports.getByTitle = function (title) {
    const book = bookRepository.getByTitle(title);
    return book;
}

exports.updateBook = function (book) {
    const newBook = {
        id: book.id,
        title: book.title,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        price: book.price,
        count: book.count
    };
    return bookRepository.update(book);
}

exports.deleteById = function (id) {
    const book = bookRepository.deleteById(id);
    return book;
}