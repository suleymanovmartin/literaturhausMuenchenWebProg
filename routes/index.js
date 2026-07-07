var express = require('express');
var router = express.Router();

iarray = 
[
  {iname: "Max", age: 19},
  {iname: "Dubrovnik", age: 456},
  {iname: "Sandra", age: 23},
];

rarray =
[
  {id: 0, name: "Ashlabad", title: 'Bibel'},
  {id: 1, name: "Harun", title: 'Koran'}

]

const bucharray = [
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

nachricht = "Hallo"
daten = {
  person: "Chris",
  age: 18,
};

router.get('/', function(req, res, next) {
  const neuesteBuecher = bucharray.slice(-2).reverse();

  res.render('index', {
    title: 'Literaturhaus München',
    neuesteBuecher: neuesteBuecher,
    link: '/reservieren'
  });
});


/* http://localhost/impressum */
router.get('/impressum', function(req, res, next) {
  res.render('impressum', {
    title: 'Impressum | Literaturhaus München'
  });
});


/* http://localhost/datenschutz */
router.get('/datenschutz', function(req, res, next) {
  res.render('datenschutz', {
    title: 'Datenschutz | Literaturhaus München'
  });
});

/* http://localhost/reservieren */
router.get('/reservieren', function(req, res, next) {
  res.render('reservierung', { title: 'Reservierung', link: 'http://localhost/' });
});

/* http://localhost/formular */
router.get('/formular', function(req, res, next) {
  res.render('formular', { title: 'Formular', link: 'http://localhost/' });
});

/* http://localhost/neuesformular */
router.post('/neuesformular', function(req, res, next) {
  console.log(req.body.ausleihen);
  let ausleihen = req.body.ausleihen;
  res.send("Danke für deine Reservierung!");
});

//Ende Christinas Routen

router.get('/1', function(req, res, next) {
  res.render('index', {
     title: 'Express' ,
     nachricht: 'Du Hurensohn'
    });
});

router.get('/:year/:month/:day', function(req, res) {
  res.send("Das Datum lautet" + req.params.year + "." + req.params.month + "." + req.params.day)
})

router.get('/names', function(req, res) {
  let qname = req.query.name;
  res.send("Dein Name lautet:" + qname + ".")
})

router.get('/:year/:month/:day', function(req, res) {
  let qname = req.query.name
  res.send("Hallo " + qname + ". " + "Heute ist der " + req.params.day + "." + req.params.month + "." + req.params.year)
})

router.get('/lyxia.html', function(req, res, next) {
  res.render('lyxias.ejs', {
    title: 'lyxia',
    einAndererParameter: 'Text, bla, bla'
  });
});

router.get('/test', function(req, res, next) {
  res.render('test');
})

router.get('/login', function(req, res, next) {
  let meldung = null;

  if (req.query.erfolg === 'true') {
    meldung = 'Deine Registrierung war erfolgreich, du kannst dich nun anmelden!'
  }
  res.render('login.ejs', {
    nachricht: meldung,
  })
})

router.post('/register', function(req, res) {
  let username = req.body.name;
  let password = req.body.password;
  let address = req.body.address;

  res.redirect('/login?erfolg=true');
})

router.get('/admin/produkte', function(req, res, next) {
  res.render('admin-produkte', {
    daten: bucharray,
    reservierungarray: rarray,
  }) 

})

router.post('/admin/produkte/loeschen/:index', function(req, res) {
  löschindex = req.params.index;
  bucharray.splice(löschindex, 1);

  res.redirect('/admin/produkte');
});

router.post('/admin/produkte/hinzufuegen/', function(req, res) {
  let buch = {
    title : req.body.title,
    isbn : req.body.isbn,
    author : req.body.author,
    genre : req.body.genre,
    frontcover : req.body.frontcover,
    freecover : req.body.freecover,
    backcover : req.body.backcover,
    description : req.body.description,
    price : req.body.price,
    bestand : req.body.bestand,
    id : bucharray.length,
  }

  bucharray.push(buch);
  
  res.redirect('/admin/produkte');
})

router.post('/admin/produkte/reservierung/loeschen/:index', function(req, res) {
  let löschindex = req.params.index;
  let suchtitle = rarray[löschindex].title;
  bucharray.forEach(element => {
    if (element.title === suchtitle) {
      element.bestand++;
    }
  });
  rarray.splice(löschindex, 1);
  res.redirect('/admin/produkte/');
})

router.post('/admin/produkte/reservierung/bestaetigen/:index', function(req, res) {
  let löschindex = req.params.index;
  rarray.splice(löschindex, 1);
  res.redirect('/admin/produkte/');
})

module.exports = router;