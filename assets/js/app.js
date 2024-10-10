const createDeck = () => {
  let deck = [];
  const suits = ['C', 'D', 'H', 'S'];
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push(rank + suit);
    }
  }

  deck = _.shuffle(deck);

  return deck;
}

let deck = createDeck();
console.log(deck);
