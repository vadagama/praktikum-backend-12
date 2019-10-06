const routerCards = require('express').Router();

const getCards = (req, res) => {
  res.send(req.cards);
};

routerCards.get('/cards', getCards);

module.exports = routerCards;
