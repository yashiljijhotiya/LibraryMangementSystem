const express = require('express');
const router = express.Router();
module.exports = router;
const bookservice = require('../services/book.service');

// fetch all books
router.get('/', (req, res) => {
    try {
        const data = bookservice.getBooks();
        if (!data) {
            const err = new Error("Books not found!");
            err.status = 404;
            throw err;
        }
        res.send(data);
    } catch (e) {
        next(e);
    }
});

//fetch particular book
router.get('/:id', (req, res) => {
    try {
        const data = bookservice.getBookById(parseInt(req.params.id));
        if (!data) {
            const err = new Error("Book not found!");
            err.status = 404;
            throw err;
        }
        res.send(data);
    } catch (e) {
        next(e);
    }
});

//get by title
router.get('/search/:title', (req, res) => {
    try {
        const data = bookservice.getByTitle(req.params.title);
        if (!data) {
            const err = new Error("Book not found!");
            err.status = 404;
            throw err;
        }
        res.send(data);
    } catch (e) {
        next(e);
    }

});


//add new book
router.post('/', (req, res) => {
    try {
        const data = bookservice.addBook(req.body);
        if (!data) {
            const err = new Error("Book not found!");
            err.status = 404;
            throw err;
        }
        res.send(data);
    } catch (e) {
        next(e);
    }
});

//update book
router.put('/', (req, res) => {
    try {
        const data = bookservice.updateBook(req.body);
        if (!data) {
            const err = new Error("Book not found!");
            err.status = 404;
            throw err;
        }

        res.send(data);
    } catch (e) {
        next(e);
    }
})

//delete book
router.delete('/:id', (req, res) => {
    try {
        const data = bookservice.deleteById(parseInt(req.params.id));
        if (!data) {
            const err = new Error("Book not found!");
            err.status = 404;
            throw err;
        }
        res.send(data);

    } catch (e) {
        next(e);
    }
});



