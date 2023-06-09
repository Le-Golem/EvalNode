const { writeData, readData, fetchData } = require('../utils/files.js');

module.exports = {
    getBooks(req , res) {
        const { page, limit } = req.query;

        const books = readData();

        const currentPage = parseInt(page, 10) || 1;
        const booksPerPage = parseInt(limit, 10) || 10;

        const startIndex = (currentPage - 1) * booksPerPage;
        const endIndex = startIndex + booksPerPage;

        const paginatedBooks = books.slice(startIndex, endIndex);

        if (paginatedBooks){
            try {
                res.send(paginatedBooks);    
        } catch (error) {
            console.log(error)
            res.send(error);
        }
        }else {
            res.status(404).send('Book not found');
        }

    },

    getOneBook(req , res) {
        const books = readData()

        const { id } = req.params ;
       
        const book = books.find((book) => book.id === +id);

        if (book) {
          res.send(book);
        } else {
          res.status(404).send('Book not found');
        }
    },
    getSort(req , res) {
        const books = readData();

        const sortedBooks = books.sort((a, b) => a.name.localeCompare(b.name));

        if (sortedBooks){
            try {
                res.send(sortedBooks);
            } catch (error) {
                res.send(error)
            }
        }else {
            res.status(404).send("sortedBook not found")
        }
        
    },

    getFiltre(req , res) {
        const author = req.query.author;
        const books = readData();

        const filteredBooks = books.filter((book) => book.author === author);

        if (filteredBooks) {
            res.send(filteredBooks);
        }else {
            res.status(404).send("filteredBooks not found")
        }
        
    },
    createOneBook(req , res) {
        const books = readData()

        const book = {...req.body, id : books.length + 1}

        books.push(book)

        writeData(books);

        try {
            res.status(201).send({ ok: true, data: book });
        } catch (error) {
            res.send(error)
        }
    },

    deleteOneBook(req,res) {
        const books = readData()
        const {id} = req.params;

        const book = books.find((book) => book.id === +id)

        if (!book)
         return res.status(404).send({ ok: false, msg: 'Invalid id provided' });

        const idbook = books.findIndex((book) => book.id === +id)

        const deletedBook = books.splice(idbook, 1);

        try {
            writeData(books);
            res.send({ ok: true, data: deletedBook });
        } catch (error) {
            res.send(error)
        }
    },

    modifyOneBook(req, res) {
        const books = readData();
        const { id } = req.params;
      
        const book = books.find((book) => book.id === +id);
      
        if (!book) {
          return res.status(404).send({ ok: false, msg: 'Invalid id provided' });
        }
      
        for (let key in req.body) {
          book[key] = req.body[key];
        }
      
        try {
            writeData(books);
            res.send({ ok: true, data: book });
        } catch (error) {
            res.send(error)
        }
      }

}