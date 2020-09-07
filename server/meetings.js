const meetingsRouter = require('express').Router();

module.exports = meetingsRouter;

const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase
} = require('./db');

meetingsRouter.get('/',(req, res, next) => {
  res.status(200);
  res.send(getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res, next) => {
  const newMeeting = addToDatabase('meetings', createMeeting());
  res.status(201).send(newMeeting);
});

meetingsRouter.delete('/', (req, res, next) => {
  const deleted = deleteAllFromDatabase('meetings');
  if (deleted) {
    res.status(204);
  } else {
    res.status(500);
  }
  res.send();
});
