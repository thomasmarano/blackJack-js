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
            var cardAt26 = deck.cards[25];
            var cardAt27 = deck.cards[26];
            deck.cut();
            expect(deck.cards[51]).toEqual(cardAt26);
            expect(deck.cards[0]).toEqual(cardAt27);
        });

        it('shuffles the deck', function(){
           var originalDeck = [];
           originalDeck = originalDeck.concat(deck.cards);
           deck.shuffle();
           var matches = originalDeck.filter(function(val, ind){
              return val === deck.cards[ind];
           });
           expect(matches.length).toBeLessThan(52)
        });
    });
});