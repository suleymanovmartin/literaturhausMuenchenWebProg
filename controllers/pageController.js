const bookModel = require('../models/bookModel');

function showHomepage(req, res) {
  const neuesteBuecher = bookModel.getNewestBooks();

  res.render('index', {
    title: 'Literaturhaus München',
    neuesteBuecher,
    link: '/reservieren'
  });
}

function showImpressum(req, res) {
  res.render('impressum', {
    title: 'Impressum | Literaturhaus München'
  });
}

function showDatenschutz(req, res) {
  res.render('datenschutz', {
    title: 'Datenschutz | Literaturhaus München'
  });
}

function showReservierung(req, res) {
  res.render('reservierung', {
    title: 'Reservierung',
    link: '/'
  });
}

function showFormular(req, res) {
  res.render('formular', {
    title: 'Formular',
    link: '/'
  });
}

function handleNewForm(req, res) {
  const ausleihdatum = req.body.ausleihen;
  console.log(ausleihdatum);

  res.send('Danke für deine Reservierung!');
}

function showLyxia(req, res) {
  res.render('lyxias', {
    title: 'lyxia',
    einAndererParameter: 'Text, bla, bla'
  });
}

function showTest(req, res) {
  res.render('test');
}

module.exports = {
  showHomepage,
  showImpressum,
  showDatenschutz,
  showReservierung,
  showFormular,
  handleNewForm,
  showLyxia,
  showTest
};