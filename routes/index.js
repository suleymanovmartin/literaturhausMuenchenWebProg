const express = require('express');
const router = express.Router();

const reservierungen = [
  { id: 0, name: 'Ashlabad', title: 'Bibel' },
  { id: 1, name: 'Harun', title: 'Koran' }
];

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

// Startseite
router.get('/', function(req, res) {
  const neuesteBuecher = buecher.slice(-2).reverse();

  res.render('index', {
    title: 'Literaturhaus München',
    neuesteBuecher,
    link: '/reservieren'
  });
});

// Rechtliches
router.get('/impressum', function(req, res) {
  res.render('impressum', {
    title: 'Impressum | Literaturhaus München'
  });
});

router.get('/datenschutz', function(req, res) {
  res.render('datenschutz', {
    title: 'Datenschutz | Literaturhaus München'
  });
});

// Reservierung und Formular
router.get('/reservieren', function(req, res) {
  res.render('reservierung', {
    title: 'Reservierung',
    link: '/'
  });
});

router.get('/formular', function(req, res) {
  res.render('formular', {
    title: 'Formular',
    link: '/'
  });
});

router.post('/neuesformular', function(req, res) {
  const ausleihdatum = req.body.ausleihen;
  console.log(ausleihdatum);

  res.send('Danke für deine Reservierung!');
});

// Übungsrouten
router.get('/1', function(req, res) {
  res.render('index', {
    title: 'Express',
    neuesteBuecher: [],
    link: '/reservieren'
  });
});

router.get('/names', function(req, res) {
  const qname = req.query.name;

  res.send(`Dein Name lautet: ${qname}.`);
});

router.get('/:year/:month/:day', function(req, res) {
  const { year, month, day } = req.params;
  const qname = req.query.name;

  if (qname) {
    return res.send(`Hallo ${qname}. Heute ist der ${day}.${month}.${year}.`);
  }

  res.send(`Das Datum lautet ${year}.${month}.${day}.`);
});

router.get('/lyxia.html', function(req, res) {
  res.render('lyxias', {
    title: 'lyxia',
    einAndererParameter: 'Text, bla, bla'
  });
});

router.get('/test', function(req, res) {
  res.render('test');
});

// Login und Registrierung
router.get('/login', function(req, res) {
  let meldung = null;

  if (req.query.erfolg === 'true') {
    meldung = 'Deine Registrierung war erfolgreich, du kannst dich nun anmelden!';
  }

  res.render('login', {
    nachricht: meldung
  });
});

router.post('/register', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const address = req.body.address;

  console.log({ username, password, address });

  res.redirect('/login?erfolg=true');
});

// Adminbereich
router.get('/admin/produkte', function(req, res) {
  res.render('admin-produkte', {
    daten: buecher,
    reservierungarray: reservierungen
  });
});

router.post('/admin/produkte/loeschen/:index', function(req, res) {
  const loeschindex = Number(req.params.index);
  buecher.splice(loeschindex, 1);

  res.redirect('/admin/produkte');
});

router.post('/admin/produkte/hinzufuegen', function(req, res) {
  const buch = {
    title: req.body.title,
    isbn: req.body.isbn,
    author: req.body.author,
    genre: req.body.genre,
    frontcover: req.body.frontcover,
    freecover: req.body.freecover,
    backcover: req.body.backcover,
    description: req.body.description,
    price: req.body.price,
    bestand: req.body.bestand,
    id: buecher.length
  };

  buecher.push(buch);

  res.redirect('/admin/produkte');
});

router.post('/admin/produkte/reservierung/loeschen/:index', function(req, res) {
  const loeschindex = Number(req.params.index);
  const suchtitle = reservierungen[loeschindex].title;

  buecher.forEach(function(buch) {
    if (buch.title === suchtitle) {
      buch.bestand++;
    }
  });

  reservierungen.splice(loeschindex, 1);
  res.redirect('/admin/produkte');
});

router.post('/admin/produkte/reservierung/bestaetigen/:index', function(req, res) {
  const loeschindex = Number(req.params.index);
  reservierungen.splice(loeschindex, 1);

  res.redirect('/admin/produkte');
});

module.exports = router;
