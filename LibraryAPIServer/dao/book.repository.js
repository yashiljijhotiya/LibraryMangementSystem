

const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data_store/book.json');

exports.get = function () {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

exports.getById = function (id) {
    const book = fs.readFileSync(filePath);
    const parseData = JSON.parse(book);
    const data = parseData.filter(i => i.id === id);
    return data;
}

exports.getByTitle = function (title) {
    const book = fs.readFileSync(filePath);
    const parseData = JSON.parse(book);
    const data = parseData.filter(i => i.title === title.toString());
    return data;
}

exports.getByAuthor = function (author) {
    const book = fs.readFileSync(filePath);
    const parseData = JSON.parse(book);
    const data = parseData.filter(i => i.author === author);
    return data;
}

exports.getByCategory = function (category) {
    const book = fs.readFileSync(filePath);
    const parseData = JSON.parse(book);
    const data = parseData.filter(i => i.category === category);
    return data;
}

exports.add = function (newBook) {
    const book = fs.readFileSync(filePath);
    const parseData = JSON.parse(book);
    const len = parseData.length;
    newBook.id = len + 1;
    parseData.push(newBook);
    fs.writeFileSync(filePath, JSON.stringify(parseData));
    return newBook;
}

exports.update = function (data) {
    const book = fs.readFileSync(filePath);
    const parseData = JSON.parse(book);
    const record = parseData.filter(i => i.id !== parseInt(data.id));
    record.push(data);
    fs.writeFileSync(filePath, JSON.stringify(record));
    return data;
}

exports.deleteById = function (id) {
    const book = fs.readFileSync(filePath);
    const parseData = JSON.parse(book);
    const recordExist = parseData.find(i => i.id === id);
    if (!recordExist) {
        const err = new Error("Book not found!");
        err.status = 404;
        throw err;
    }
    
    const updatedData = parseData.filter(i => i.id !== id);
    
    fs.writeFileSync(filePath, JSON.stringify(updatedData));
    return recordExist;
}