const reservierungen = [
  { id: 0, name: 'Ashlabad', title: 'Bibel' },
  { id: 1, name: 'Harun', title: 'Koran' }
];

function getAllReservations() {
  return reservierungen;
}

function getReservationByIndex(index) {
  return reservierungen[index];
}

function deleteReservationByIndex(index) {
  reservierungen.splice(index, 1);
}

module.exports = {
  getAllReservations,
  getReservationByIndex,
  deleteReservationByIndex
};