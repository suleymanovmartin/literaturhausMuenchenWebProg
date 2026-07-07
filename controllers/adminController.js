const bookModel = require('../models/bookModel');
const reservationModel = require('../models/reservationModel');

function showProducts(req, res) {
  const buecher = bookModel.getAllBooks();
  const reservierungen = reservationModel.getAllReservations();

  res.render('admin-produkte', {
    daten: buecher,
    reservierungarray: reservierungen
  });
}

function deleteProduct(req, res) {
  const loeschindex = Number(req.params.index);

  bookModel.deleteBookByIndex(loeschindex);

  res.redirect('/admin/produkte');
}

function addProduct(req, res) {
  bookModel.addBook(req.body);

  res.redirect('/admin/produkte');
}

function deleteReservation(req, res) {
  const loeschindex = Number(req.params.index);
  const reservierung = reservationModel.getReservationByIndex(loeschindex);

  if (reservierung) {
    bookModel.increaseStockByTitle(reservierung.title);
  }

  reservationModel.deleteReservationByIndex(loeschindex);

  res.redirect('/admin/produkte');
}

function confirmReservation(req, res) {
  const loeschindex = Number(req.params.index);

  reservationModel.deleteReservationByIndex(loeschindex);

  res.redirect('/admin/produkte');
}

module.exports = {
  showProducts,
  deleteProduct,
  addProduct,
  deleteReservation,
  confirmReservation
};