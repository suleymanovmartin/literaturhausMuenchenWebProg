function showLogin(req, res) {
  let meldung = null;

  if (req.query.erfolg === 'true') {
    meldung = 'Deine Registrierung war erfolgreich, du kannst dich nun anmelden!';
  }

  res.render('login', {
    nachricht: meldung
  });
}

function registerUser(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const address = req.body.address;

  console.log({ username, password, address });

  res.redirect('/login?erfolg=true');
}

module.exports = {
  showLogin,
  registerUser
};