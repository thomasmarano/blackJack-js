'use strict';

function Deck() {
    this.cards = [];

    var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (let index in suits) {
        for (let index in values) {
            this.cards.push([suits[index], values[index]])
        }
    }
}


module.exports = Deck;