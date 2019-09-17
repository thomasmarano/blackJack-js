var Hand = require('../src/hand');

describe('Hand', function(){

    var hand = new Hand();

    describe('Initialization Tests', function(){
        it('starts score on 0', function(){
            expect(hand.score).toEqual(0)
        });
        it('starts with empty hand', function(){
           expect(hand.currCards).toEqual([])
        });

        it('gives you two cards when you start game', function(){
            var emptyHand = hand.currCards.length;
            hand.startGame();
            expect(hand.currCards.length).toBeGreaterThan(emptyHand);
            expect(hand.currCards.length).toEqual(2)
        });
    });

    describe('Game Logic', function(){

        beforeEach(function(){
           hand.startGame();
        });


        // it('gives you a card when you hit', function(){
        //
        //     hand.hit();
        //
        // });
    });
});