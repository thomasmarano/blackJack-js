'use strict';
var Deck = require('./deck');
var ScoreCalculator = require('./scoreCalculator');

function Hand(deck, calculator){
    this.deck = deck || new Deck();
    this.calculator = calculator || new ScoreCalculator();
    this.score = 0;
    this.currCards = [];
}

Hand.prototype.startGame = function(){
    for (var x = 0; x < 2; x++) {
        this.dealCard();
    }
};

Hand.prototype.hit = function(){
    this.dealCard()
};

Hand.prototype.dealCard = function(){
    this.currCards.push(this.deck.deal());
};

Hand.prototype.updateScore = function(){
    return this.score = this.calculator.calculate(this.currCards)
};

module.exports = Hand;