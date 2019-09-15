var Deck = require('../src/deck');

describe('Deck', function(){

    var deck = new Deck();


    describe('Initialization Tests', function(){
        it('starts with 52 cards', function(){
            expect(deck.cards.length).toEqual(52);
        });
    });

    describe('Basic Deck Functionality', function(){
        it('deals the top card', function(){
            var firstCard = deck.cards[0];
            expect(deck.deal()).toEqual(firstCard);
            expect(deck.cards.length).toEqual(51)
        });
    });

});