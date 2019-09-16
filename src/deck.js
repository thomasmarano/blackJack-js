'use strict';

function Deck() {
    this.cards = [];

    var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (let index1 in suits) {
        for (let index2 in values) {
            this.cards.push([suits[index1], values[index2]])
        }
    }
}

Deck.prototype.deal = function(){
  return this.cards.shift();
};

Deck.prototype.reset = function(){
    var newDeck = new Deck();
    this.cards = newDeck.cards
};

Deck.prototype.cut = function() {
    var firstHalf = this.cards.splice(0, 26);
    this.cards = this.cards.concat(firstHalf);
};

Deck.prototype.shuffle = function() {
    var deckLength = this.cards.length;

    while (deckLength > 1) {
        var randIndex = Math.floor(Math.random() * deckLength);
        var randCard = this.cards[randIndex];
        var lastCard = this.cards[deckLength - 1];
        this.cards.splice(randIndex, 1, lastCard);
        this.cards.splice(deckLength - 1, 1, randCard);
        deckLength--
    }
    return this.cards;
};

module.exports = Deck;