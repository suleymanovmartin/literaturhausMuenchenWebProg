const buecher = [
  {
    title: 'Die Sprache der Dinge',
    isbn: '978-3-948217-41-0',
    author: 'Emilia Berger',
    genre: 'Essays',
    frontcover: '/images/books/die-sprache-der-dinge.png',
    freecover: null,
    backcover: null,
    description: 'Feine Essays über Alltagsgegenstände, Erinnerungen und die kleinen Bedeutungen, die Dinge in unserem Leben annehmen.',
    price: 18.90,
    bestand: 9,
    id: 0
  },
  {
    title: 'Nachts in der Stadt',
    isbn: '978-3-948217-42-7',
    author: 'Sofia Hartmann',
    genre: 'Roman',
    frontcover: '/images/books/nachts-in-der-stadt.png',
    freecover: null,
    backcover: null,
    description: 'Ein atmosphärischer Roman über nächtliche Wege, verborgene Begegnungen und das leise Pulsieren einer Großstadt.',
    price: 22.00,
    bestand: 6,
    id: 1
  },
  {
    title: 'Über die Stille',
    isbn: '978-3-948217-43-4',
    author: 'Martin Weigand',
    genre: 'Gedichte',
    frontcover: '/images/books/ueber-die-stille.png',
    freecover: null,
    backcover: null,
    description: 'Ein ruhiger Gedichtband über Natur, Rückzug und Momente, in denen zwischen wenigen Worten viel Raum entsteht.',
    price: 16.50,
    bestand: 11,
    id: 2
  },
  {
    title: 'Das Licht zwischen den Zeilen',
    isbn: '978-3-948217-44-1',
    author: 'Clara Hoffmann',
    genre: 'Roman',
    frontcover: '/images/books/das-licht-zwischen-den-zeilen.png',
    freecover: null,
    backcover: null,
    description: 'Ein literarischer Roman über eine Buchhandlung, verlorene Erinnerungen und die besondere Kraft von Geschichten.',
    price: 24.90,
    bestand: 8,
    id: 3
  }
];

function getAllBooks() {
  return buecher;
}

function getNewestBooks() {
  return buecher.slice(-2).reverse();
}

function addBook(bookData) {
  const neuesBuch = {
    title: bookData.title,
    isbn: bookData.isbn,
    author: bookData.author,
    genre: bookData.genre,
    frontcover: bookData.frontcover,
    freecover: bookData.freecover,
    backcover: bookData.backcover,
    description: bookData.description,
    price: bookData.price,
    bestand: bookData.bestand,
    id: buecher.length
  };

  buecher.push(neuesBuch);
}

function deleteBookByIndex(index) {
  buecher.splice(index, 1);
}

function increaseStockByTitle(title) {
  buecher.forEach(function(buch) {
    if (buch.title === title) {
      buch.bestand++;
    }
  });
}

module.exports = {
  getAllBooks,
  getNewestBooks,
  addBook,
  deleteBookByIndex,
  increaseStockByTitle
};