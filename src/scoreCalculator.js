'use strict';

function ScoreCalculator(){

}

ScoreCalculator.prototype.calculate = function(cards){
   var myThis = this;
   return cards.reduce(function(sum, each){
        return sum + myThis.faceCardCheck([each[1]])
        }, 0);
};



ScoreCalculator.prototype.faceCardCheck = function(card){
    if (typeof card[0] === 'number') {
      return card[0]
  } else {
      return 10;
    }
};


module.exports = ScoreCalculator;