var Hand = require('../src/hand');

describe('Hand', function(){
    var deck;
    var hand;

    beforeEach(function(){
        deck = jasmine.createSpyObj('deckSpy', ['deal']);
        hand = new Hand(deck);
    });

    describe('initialization tests', function(){
        it('starts score on 0', function(){
            expect(hand.score).toEqual(0)
        });
        it('starts with empty hand', function(){
           expect(hand.currCards).toEqual([])
        });
    });

    describe('game logic', function(){

        beforeEach(function(){

        });

        it('gives you two cards when you start game', function(){
            var emptyHand = hand.currCards.length;
            hand.startGame();
            expect(hand.currCards.length).toBeGreaterThan(emptyHand);
            expect(hand.currCards.length).toEqual(2);
            expect(deck.deal).toHaveBeenCalled()
        });

        it('gives you a card when you hit', function(){
            expect(hand.currCards.length).toEqual(0);
            hand.hit();
            expect(hand.currCards.length).toEqual(1);
            expect(deck.deal).toHaveBeenCalled()
        });
    });

});