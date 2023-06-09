const fs = require('fs');
const path = require('path');



const booksPath = path.join(__dirname, '..', 'data', 'books.json')


    function writeData(content) {
    try {
        fs.writeFileSync(booksPath, JSON.stringify(content));
    } catch (err) {
        console.error('Error writing file : ', err.message);
    }
    }

    function readData() {
        try {
          const books = fs.readFileSync(booksPath, 'utf-8');
          return JSON.parse(books);
        } catch (err) {
          console.error('Error reading file:', err.message);
          return [];
        }
    }

exports.writeData = writeData; //exports = module.exports
exports.readData = readData;
