const express = require('express')

const app = express()

const books = require('./resources/books.router')

app.use(express.json());
app.use('/', books)



app.listen(3000, () => console.log("Ecoute en cours sur 3000 ..."))