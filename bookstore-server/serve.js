const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(44382, () => {
  console.log('Server Started!');
});

app.route('/api/bookstore').get((request, response) => {
  response.send(BOOKS);
});

app.route('/api/bookstore').post((request, response) => {
  let book = request.body;

  const firstId = BOOKS ? Math.max.apply(null, BOOKS.map(courseIterator => bookIterator.id)) + 1 : 1;
  book.id = firstId;
  BOOKS.push(book);
  

  response.status(201).send(book);
});

app.route('/api/bookstore/:id').put((request, response) => {
  const bookId = +request.params['id'];
  const book = request.body;

  const index = BOOKS.findIndex(bookIterator => bookIterator.id === bookId);
  BOOKS[index] = book;

  response.status(200).send(book);
});

app.route('/api/bookstore/:id').get((request, response) => {
  const bookId = +request.params['id'];

  response.status(200).send(BOOKS.find(bookIterator => bookIterator.id === bookId));
});

app.route('/api/bookstore/:id').delete((request, response)=> {
  const bookId = +request.params['id'];
  BOOKS = BOOKS.filter(bookIterator => bookIterator.id !== bookId);
  
  response.status(204).send({});
});

var BOOKS = [
    {
      id: '1',
      name: 'Redes básico',
      price: 10.50,
      quantity: 1,
      category: 'Informática',
      img: '1',
    },
    {
      id: '2',
      name: 'Forno e Fogão',
      price: 10.68,
      quantity: 4,
      category: 'Culinária',
      img: '1',
    },
    {
      id: '3',
      name: 'Redes básico II',
      price: 50.53,
      quantity: 8,
      category: 'Informática',
      img: '1',
    },
    {
      id: '4',
      name: 'Lidando com C#',
      price: 199.90,
      quantity: 1,
      category: 'Informática',
      img: '1',
    },
    {
      id: '5',
      name: 'Angular',
      price: 100.01,
      quantity: 1,
      category: 'Informática',
      img: '1',
    }
];