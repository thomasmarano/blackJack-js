var Game = require('../src/game');

describe('Game', function(){

    var game = new Game();

    describe('Initialization Tests', function(){
        it('starts score on 0', function(){
            expect(game.score).toEqual(0)
        });
    });
});