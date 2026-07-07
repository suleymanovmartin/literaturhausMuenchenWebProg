var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

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

userarray = 
[
  { 
    username: 'admin',
    password: 'vorlaufPasswort',
    address: '',
    role: 'admin',
  }
  
];

bucharray = 
[
  {title: 'Harry Potter und der Stein der Weisen', isbn: '9783551322814', author: 'J. K. Rowling', genre: 'Fantasy', frontcover: 'https://covers.openlibrary.org/b/isbn/9783551322814-L.jpg', freecover: null, backcover: null, description: 'Harry erfährt an seinem elften Geburtstag, dass er ein Zauberer ist, und beginnt seine Ausbildung in Hogwarts.', price: 12.00, bestand: 4, id: 0},
  {title: 'Der Hobbit', isbn: '9783608938005', author: 'J. R. R. Tolkien', genre: 'Fantasy', frontcover: 'https://covers.openlibrary.org/b/isbn/9783608938005-L.jpg', freecover: null, backcover: null, description: 'Bilbo Beutlin verlässt sein ruhiges Zuhause und begibt sich mit einer Gruppe Zwerge auf ein gefährliches Abenteuer.', price: 24.00, bestand: 3, id: 1},
  {title: '1984', isbn: '9783548234106', author: 'George Orwell', genre: 'Dystopie', frontcover: 'https://covers.openlibrary.org/b/isbn/9783548234106-L.jpg', freecover: null, backcover: null, description: 'Winston Smith lebt in einem totalitären Staat, der seine Bürger lückenlos überwacht und selbst Gedanken kontrolliert.', price: 14.00, bestand: 5, id: 2},
  {title: 'Der kleine Prinz', isbn: '9783792000496', author: 'Antoine de Saint-Exupéry', genre: 'Erzählung', frontcover: 'https://covers.openlibrary.org/b/isbn/9783792000496-L.jpg', freecover: null, backcover: null, description: 'Ein kleiner Prinz reist von Planet zu Planet und lernt dabei viel über Freundschaft, Liebe und Verantwortung.', price: 8.00, bestand: 6, id: 3},
  {title: 'Momo', isbn: '9783522202941', author: 'Michael Ende', genre: 'Fantasy', frontcover: 'https://covers.openlibrary.org/b/isbn/9783522202941-L.jpg', freecover: null, backcover: null, description: 'Das Mädchen Momo stellt sich den grauen Herren entgegen, die den Menschen ihre Zeit stehlen.', price: 15.00, bestand: 2, id: 4},
  {title: 'Die unendliche Geschichte', isbn: '9783522202804', author: 'Michael Ende', genre: 'Fantasy', frontcover: 'https://covers.openlibrary.org/b/isbn/9783522202804-L.jpg', freecover: null, backcover: null, description: 'Bastian entdeckt ein geheimnisvolles Buch und wird selbst Teil der bedrohten Welt Phantásien.', price: 20.00, bestand: 4, id: 5},
  {title: 'Tintenherz', isbn: '9783791504650', author: 'Cornelia Funke', genre: 'Fantasy', frontcover: 'https://covers.openlibrary.org/b/isbn/9783791504650-L.jpg', freecover: null, backcover: null, description: 'Meggies Vater kann Figuren aus Büchern herauslesen, doch diese besondere Gabe bringt große Gefahren mit sich.', price: 18.00, bestand: 3, id: 6},
  {title: 'Das Parfum', isbn: '9783257228007', author: 'Patrick Süskind', genre: 'Historischer Roman', frontcover: 'https://covers.openlibrary.org/b/isbn/9783257228007-L.jpg', freecover: null, backcover: null, description: 'Jean-Baptiste Grenouille besitzt einen außergewöhnlichen Geruchssinn und verfolgt die Idee, den vollkommenen Duft zu erschaffen.', price: 13.00, bestand: 2, id: 7},
  {title: 'Der Vorleser', isbn: '9783257229530', author: 'Bernhard Schlink', genre: 'Roman', frontcover: 'https://covers.openlibrary.org/b/isbn/9783257229530-L.jpg', freecover: null, backcover: null, description: 'Michael blickt auf seine Jugendliebe zu Hanna und deren später enthüllte Vergangenheit zurück.', price: 12.00, bestand: 3, id: 8},
  {title: 'Die Vermessung der Welt', isbn: '9783499241004', author: 'Daniel Kehlmann', genre: 'Historischer Roman', frontcover: 'https://covers.openlibrary.org/b/isbn/9783499241004-L.jpg', freecover: null, backcover: null, description: 'Der Roman erzählt auf humorvolle Weise von Alexander von Humboldt und Carl Friedrich Gauß.', price: 14.00, bestand: 4, id: 9},
  {title: 'Der Gesang der Flusskrebse', isbn: '9783453424012', author: 'Delia Owens', genre: 'Roman', frontcover: 'https://covers.openlibrary.org/b/isbn/9783453424012-L.jpg', freecover: null, backcover: null, description: 'Kya wächst allein im Marschland auf und gerät Jahre später in den Mittelpunkt einer Mordermittlung.', price: 14.00, bestand: 5, id: 10},
  {title: 'Die Bücherdiebin', isbn: '9783570403993', author: 'Markus Zusak', genre: 'Historischer Roman', frontcover: 'https://covers.openlibrary.org/b/isbn/9783570403993-L.jpg', freecover: null, backcover: null, description: 'Im nationalsozialistischen Deutschland findet Liesel Trost und Hoffnung in gestohlenen Büchern und neuen Freundschaften.', price: 12.00, bestand: 4, id: 11},
  {title: 'Die Mitternachtsbibliothek', isbn: '9783426282564', author: 'Matt Haig', genre: 'Roman', frontcover: 'https://covers.openlibrary.org/b/isbn/9783426282564-L.jpg', freecover: null, backcover: null, description: 'Nora gelangt in eine Bibliothek zwischen Leben und Tod und probiert dort alternative Versionen ihres Lebens aus.', price: 13.00, bestand: 3, id: 12},
  {title: 'Der Alchimist', isbn: '9783257237276', author: 'Paulo Coelho', genre: 'Roman', frontcover: 'https://covers.openlibrary.org/b/isbn/9783257237276-L.jpg', freecover: null, backcover: null, description: 'Der Hirte Santiago folgt einem Traum und macht sich auf die Suche nach einem Schatz bei den Pyramiden.', price: 13.00, bestand: 5, id: 13},
  {title: 'Sofies Welt', isbn: '9783423620005', author: 'Jostein Gaarder', genre: 'Philosophischer Roman', frontcover: 'https://covers.openlibrary.org/b/isbn/9783423620005-L.jpg', freecover: null, backcover: null, description: 'Sofie erhält geheimnisvolle Briefe und beginnt damit eine Reise durch die Geschichte der Philosophie.', price: 14.00, bestand: 3, id: 14},
  {title: 'Pride and Prejudice', isbn: '9780141439518', author: 'Jane Austen', genre: 'Klassiker', frontcover: 'https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg', freecover: null, backcover: null, description: 'Elizabeth Bennet und Mr. Darcy müssen ihre Vorurteile und ihren Stolz überwinden.', price: 11.00, bestand: 4, id: 15},
  {title: 'Frankenstein', isbn: '9780141439471', author: 'Mary Shelley', genre: 'Horror', frontcover: 'https://covers.openlibrary.org/b/isbn/9780141439471-L.jpg', freecover: null, backcover: null, description: 'Victor Frankenstein erschafft künstliches Leben und muss sich den Folgen seines Experiments stellen.', price: 10.00, bestand: 3, id: 16},
  {title: 'The Great Gatsby', isbn: '9780743273565', author: 'F. Scott Fitzgerald', genre: 'Klassiker', frontcover: 'https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg', freecover: null, backcover: null, description: 'Der geheimnisvolle Millionär Jay Gatsby versucht, eine verlorene Liebe zurückzugewinnen.', price: 10.00, bestand: 5, id: 17},
  {title: 'To Kill a Mockingbird', isbn: '9780061120084', author: 'Harper Lee', genre: 'Klassiker', frontcover: 'https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg', freecover: null, backcover: null, description: 'Scout erlebt, wie ihr Vater in einer von Rassismus geprägten Stadt einen unschuldig angeklagten Mann verteidigt.', price: 12.00, bestand: 4, id: 18},
  {title: 'The Catcher in the Rye', isbn: '9780316769488', author: 'J. D. Salinger', genre: 'Coming-of-Age', frontcover: 'https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg', freecover: null, backcover: null, description: 'Der Jugendliche Holden Caulfield streift nach einem Schulverweis durch New York und sucht nach Orientierung.', price: 11.00, bestand: 2, id: 19},
]

nachricht = "Hallo"
daten = {
  person: "Chris",
  age: 18,
};

router.get('/', function(req, res, next) {
  console.log(req.session.username);
  console.log(req.session.role);
  /*
  if (req.session.username != undefined) {
    
  }
  */
  res.render('index', {
    
    title: "9/11 war ein Inside-Job",
    nachricht: "Die USA Elite isst gerne Kinder, aber wie grillt man eigentlich Kinder um sie zu essen? Das lernen sie hier suchen sie dafür das nötige Buch!",
    daten: iarray,
  })
});

/* http://localhost/reservieren */
router.get('/reservieren', function(req, res, next) {
  console.log(req.session);
  rarray.find(function(reservierung){
    return reservierung.name === req.session.username
  })
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
  else if (req.query.fehler === 'konto') {
    meldung = 'Das Konto wurde nicht gefunden'
  }
  res.render('login.ejs', {
    nachricht: meldung,
  })
})

router.post('/login', async function (req, res, next) {
  username = req.body.username;
  password = req.body.password;

  let gefundeneruser = userarray.find(function(user) {
    return user.username === username
  })
  console.log(gefundeneruser);
  if (gefundeneruser == undefined) {
    return res.redirect('/login?fehler=konto');
  }
  let passwordcomparison = await bcrypt.compare(password, gefundeneruser.password);
  if (passwordcomparison === false) {
    return res.redirect('/login?fehler=konto');
  }
  req.session.username = gefundeneruser.username;
  req.session.role = gefundeneruser.role;
  console.log(req.session);
  res.redirect('/')
})

router.post('/register', async function(req, res) {
  let username = req.body.name;
  let password = req.body.password;
  let address = req.body.address;
  let hashedPassword = await bcrypt.hash(password, 12);
  console.log(req.body);
  console.log(hashedPassword);
  let user = 
  {
    username: req.body.username,
    password: hashedPassword,
    address: req.body.address,
    role: "user",
  }
  userarray.push(user);
  console.log(userarray);


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

router.get('/buch/:id', function(req, res) {
  let buchid = Number(req.params.id);
  console.log(buchid);

  let gefundenesbuch = bucharray.find(function(suchbuch) {
    return buchid === suchbuch.id;
  })
  console.log(gefundenesbuch);

  res.render('buchblog.ejs', {
    buch: gefundenesbuch
    
  }); 
})

router.post('/buch/:id/reservieren', function(req, res) {
  let buchid = Number(req.params.id);
  let highestId = -1;
  for (let i = 0; i < rarray.length; i++) {
    if (rarray[i].id > highestId) {
      highestId = rarray[i].id;
    }
  }
  highestId++;
  let gefundenesbuch = bucharray.find(function(suchbuch) {
    return buchid === suchbuch.id
  })
  if (gefundenesbuch.bestand > 0) {
    gefundenesbuch.bestand--;
    let reservation = 
    {
      name: 'name',
      title: gefundenesbuch.title,
      id: highestId,
    };
    rarray.push(reservation);
    res.redirect('/reservieren')
  }
})

module.exports = router;
