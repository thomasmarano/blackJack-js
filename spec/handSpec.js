var Hand = require('../src/hand');

describe('Hand', function(){

    var hand = new Hand();

    describe('Initialization Tests', function(){
        it('starts score on 0', function(){
            expect(hand.score).toEqual(0)
        });
    });
});