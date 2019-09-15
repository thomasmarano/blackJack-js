var Deck = require('../src/deck');

describe('Deck', function(){

    var deck = new Deck();


    describe('Initialization Tests', function(){
        it('starts with 52 cards', function(){
            expect(deck.cards.length).toEqual(52);
        });
    });
});