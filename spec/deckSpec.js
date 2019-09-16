var Deck = require('../src/deck');

describe('Deck', function(){

    var deck = new Deck();

    beforeEach(function(){
        deck.reset();
    });

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

        it('resets the deck after a game', function(){
            deck.deal();
            expect(deck.cards.length).toEqual(51);
            deck.reset();
            expect(deck.cards.length).toEqual(52)
        });

        it('cuts the deck', function(){
            var middleCard = deck.cards[26];
            deck.cut();
            expect(deck.cards[0]).toEqual(middleCard)
        });

        // it('shuffles the deck', function(){
        // Need to figure out how to test for random
        // });
    });

});