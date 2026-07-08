var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');

var app = express();

// EJS rendert die HTML-Seiten aus dem Ordner views.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Diese Middleware verarbeitet Logs, Formulardaten, Cookies und statische Dateien.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Die Session hält den angemeldeten Benutzernamen und die Rolle für eine Stunde fest.
app.use(session({
  secret: 'lfjgkjf0u9870IAUOISAJDÖKMAÖIU(Xzuixjpüap..a.,ldmslkajij',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}));

// Alle aktuell benötigten Anwendungsrouten liegen im Index-Router.
app.use('/', indexRouter);

// Nicht gefundene Routen werden an die Fehlerseite weitergegeben.
app.use(function(req, res, next) {
  next(createError(404));
});

// Die zentrale Fehlerbehandlung setzt den HTTP-Status und rendert error.ejs.
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
