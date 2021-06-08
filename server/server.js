import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.get('/', (req, res) => {
    res.send('SERWER Z DANYMI');
});
//BOOKS GET 
app.get('/books', (req, res) => {
    fs.readFile('./books.json', 'utf8', (err, booksJson) => {
        if (err) {
            console.log("File read failed in GET /books: "+ err);
            res.status(500).send('File read failed');
            return;
        }

        
        console.log("GET: /books");
        res.send(booksJson);
    });
});



//BOOKS GET: id 
app.get('/books/:id', (req, res) => {
    fs.readFile('./books.json', 'utf8', (err, booksJson) => {
        if (err) {
            console.log("File read failed in GET /books/" + req.params.id + ": "+ err);
            res.status(500).send('File read failed');
            return;
        }
        var books = JSON.parse(booksJson);
        var book = books.find(booktmp => booktmp.bookId == req.params.id);
        if (!book) {
            console.log("Can't find book with id: " + req.params.id);
            res.status(500).send('Cant find book with id: ' + req.params.id);
            return;
        }
        var bookJSON = JSON.stringify(book);
        console.log("GET /books/" + req.params.id);
        res.send(bookJSON);
    });
});

//BOOK ADD- POST:
app.post('/books', (req, res) => {
    fs.readFile('./books.json', 'utf8', (err, booksJson) => {
        if (err) {
            console.log("File read failed in POST /books: "+ err);
            res.status(500).send('File read failed');
            return;
        }
        var books = JSON.parse(booksJson);
        var book = books.find(booktmp => booktmp.bookId == req.body.bookId);
        if (!book) {
            books.push(req.body);
            var newList = JSON.stringify(books);
            fs.writeFile('./books.json', newList, err => {
                if (err) {
                    console.log("Error writing file in POST /books: "+ err);
                    res.status(500).send('Error writing file books.json');
                } else {
                    res.status(201).send(req.body);
                    console.log("Successfully wrote file books.json and added new book with id = " + req.body.bookId);
                }
            });
        } else {
            console.log("Book by id = " + req.body.bookId + " already exists");
            res.status(500).send('Book by id = ' + req.body.bookId + ' already exists');
            return;
        }
    });
});

//BOOK EDIT:
app.put('/books/:id', (req, res) => {
    fs.readFile('./books.json', 'utf8', (err, booksJson) => {
        if (err) {
            console.log("File read failed in PUT /books/" + req.params.id+": "+ err);
            res.status(500).send('File read failed');
            return;
        }
        var books = JSON.parse(booksJson);
        var bookBody = books.find(booktmp => booktmp.bookId == req.body.bookId);
        if (bookBody && bookBody.bookId != req.params.id) {
            console.log("book by id = " + bookBody.bookId + " already exists");
            res.status(500).send('book by id = ' + bookBody.bookId + ' already exists');
            return;
        }
        var book = books.find(booktmp => booktmp.bookId == req.params.id);
        if (!book) {
            books.push(req.body);
            var newList = JSON.stringify(books);
            fs.writeFile('./books.json', newList, err => {
                if (err) {
                    console.log("Error writing file in PUT /books/" + req.params.id+": "+err);
                    res.status(500).send('Error writing file books.json');
                } else {
                    res.status(201).send(req.body);
                    console.log("Successfully wrote file books.json and added new book with id = " + req.body.bookId);
                }
            });
        } else {
            for (var i = 0; i < books.length; i++) {
                if (books[i].bookId == book.bookId) {
                    books[i] = req.body;
                }
            }
            var newList = JSON.stringify(books);
            fs.writeFile('./books.json', newList, err => {
                if (err) {
                    console.log("Error writing file in PUT /books/" + req.params.id+": "+ err);
                    res.status(500).send('Error writing file books.json');
                } else {
                    res.status(200).send(req.body);
                    console.log("Successfully wrote file books.json and edit book with old id = " + req.params.id);
                }
            });
        }
    });
});

//BOOK DELETE
app.delete('/book/:id', (req, res) => {
    fs.readFile('./books.json', 'utf8', (err, booksJson) => {
        if (err) {
            console.log("File read failed in DELETE /books: "+ err);
            res.status(500).send('File read failed');
            return;
        }
        var books = JSON.parse(booksJson);
        var bookIndex = books.findIndex(booktmp => booktmp.bookId == req.params.id);
        if (bookIndex != -1) {
            books.splice(bookIndex, 1);
            var newList = JSON.stringify(books);
            fs.writeFile('./books.json', newList, err => {
                if (err) {
                    console.log("Error writing file in DELETE /books/" + req.params.id+": "+ err);
                    res.status(500).send('Error writing file books.json');
                } else {
                    res.status(204).send();
                    console.log("Successfully deleted book with id = " + req.params.id);
                }
            });
        } else {
            console.log("book by id = " + req.params.id + " does not exists");
            res.status(500).send('book by id = ' + req.params.id + ' does not exists');
            return;
        }
    });
});

app.listen(7777, () => console.log("Server address http://localhost:7777"));