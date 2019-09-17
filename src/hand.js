'use strict';
var Deck = require('./deck');

function Hand(deck){
    this.deck = deck || new Deck();
    this.score = 0;
    this.currCards = [];
}

Hand.prototype.startGame = function(){
    for (var x = 0; x < 2; x++) {
        this.currCards.push(this.deck.deal());
    }
};

Hand.prototype.hit = function(){
    this.currCards.push(this.deck.deal())
};

module.exports = Hand;