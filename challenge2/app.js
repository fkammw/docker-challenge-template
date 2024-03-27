
const express = require('express');
const app = express();
const port = 3000;

let books = [
    { id: 1, title: 'Book One', author: 'Author One' },
    { id: 2, title: 'Book Two', author: 'Author Two' },
    { id: 3, title: 'Book Three', author: 'Author Three' }
    
];

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('The book with the given ID was not found.');
    res.json(book);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
