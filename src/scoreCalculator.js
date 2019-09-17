'use strict';

function ScoreCalculator(){

}

ScoreCalculator.prototype.calculate = function(cards){
    return cards.reduce(function(sum, each){
        return sum + each[1]
        }, 0);
};

module.exports = ScoreCalculator;

