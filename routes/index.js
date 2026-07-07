const express = require('express');
const router = express.Router();

const pageController = require('../controllers/pageController');
const practiceController = require('../controllers/practiceController');
const authController = require('../controllers/authController');
const adminController = require('../controllers/adminController');

// Startseite
router.get('/', pageController.showHomepage);

// Rechtliches
router.get('/impressum', pageController.showImpressum);
router.get('/datenschutz', pageController.showDatenschutz);

// Reservierung und Formular
router.get('/reservieren', pageController.showReservierung);
router.get('/formular', pageController.showFormular);
router.post('/neuesformular', pageController.handleNewForm);

// Übungsrouten
router.get('/1', practiceController.showOldIndexExample);
router.get('/names', practiceController.showName);
router.get('/:year/:month/:day', practiceController.showDate);

router.get('/lyxia.html', pageController.showLyxia);
router.get('/test', pageController.showTest);

// Login und Registrierung
router.get('/login', authController.showLogin);
router.post('/register', authController.registerUser);

// Adminbereich
router.get('/admin/produkte', adminController.showProducts);
router.post('/admin/produkte/loeschen/:index', adminController.deleteProduct);
router.post('/admin/produkte/hinzufuegen', adminController.addProduct);
router.post('/admin/produkte/reservierung/loeschen/:index', adminController.deleteReservation);
router.post('/admin/produkte/reservierung/bestaetigen/:index', adminController.confirmReservation);

module.exports = router;