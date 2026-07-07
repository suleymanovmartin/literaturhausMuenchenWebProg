function showOldIndexExample(req, res) {
  res.render('index', {
    title: 'Express',
    neuesteBuecher: [],
    link: '/reservieren'
  });
}

function showName(req, res) {
  const qname = req.query.name;

  res.send(`Dein Name lautet: ${qname}.`);
}

function showDate(req, res) {
  const { year, month, day } = req.params;
  const qname = req.query.name;

  if (qname) {
    return res.send(`Hallo ${qname}. Heute ist der ${day}.${month}.${year}.`);
  }

  res.send(`Das Datum lautet ${year}.${month}.${day}.`);
}

module.exports = {
  showOldIndexExample,
  showName,
  showDate
};