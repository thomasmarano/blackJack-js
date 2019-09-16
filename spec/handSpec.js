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

    });

    describe('Start Game', function(){


    });
});