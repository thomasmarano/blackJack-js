var ScoreCalculator = require('../src/scoreCalculator');

describe('Score Calculator', function(){

   var scorer;

   beforeEach(function(){
       scorer = new ScoreCalculator();
   });

    it('correctly calculates the value of 2 non-face cards', function(){
        expect(scorer.calculate([[ 'Clubs', 9 ], [ 'Diamonds', 6 ]])).toEqual(15);
        expect(scorer.calculate([[ 'Hearts', 4 ], [ 'Spades', 7 ]])).toEqual(11)
    });

    it('correctly calculates the value of 2+ non-face cards', function(){
        expect(scorer.calculate([[ 'Clubs', 9 ], [ 'Spades', 6 ], [ 'Spades', 4 ], [ 'Spades', 7 ]])).toEqual(26);
        expect(scorer.calculate([[ 'Clubs', 5 ], [ 'Diamonds', 8 ], [ 'Hearts', 3 ]])).toEqual(16);

    })

});