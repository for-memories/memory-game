//gameDeck holds the memory deck and shuffles it

app.gameDeck = function (numPairs) {

  var icons = [
    'icon-droplet',
    'icon-feather',
    'icon-list',
    'icon-moon',
    'icon-eye',
    'icon-lightbulb',
    'icon-flag',
    'icon-hourglass',
    'icon-star',
    'icon-camera',
    'icon-search',
    'icon-trash',
    'icon-brush',
    'icon-scissors',
    'icon-music',
    'icon-attach',
    'icon-umbrella',
    'icon-leaf',
    'icon-bug',
    'icon-smile',
    'icon-paw'
  ];

  if (numPairs > icons.length) {
    throw new Error("numPairs cannot be greater than " + icons.length + '.');
  }

  // use lodash _.shuffle to shuffle cards
  var shuffledDeck = _.shuffle(icons);

  //limit length of shuffle to gamePairCount
  //concatenate the deck to itself to have 2 of each card
  shuffledDeck.length = numPairs;
  shuffledDeck= shuffledDeck.concat(shuffledDeck);

  //shuffle the deck with pairs again
  // lodash shuffle method yet again
  shuffledDeck =_.shuffle(shuffledDeck);
  return shuffledDeck;
};
