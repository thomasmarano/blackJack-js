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

module.exports = Deck;