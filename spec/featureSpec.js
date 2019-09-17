var Hand = require('../src/hand');
var Deck = require('../src/deck');

describe('Feature Tests', function(){
   var deck = new Deck();
   var hand = new Hand(deck);

   beforeEach(function(){
      deck.reset();
      deck.shuffle();
   });

   describe('New Game Starts', function(){
       it('hand receives two cards from deck', function(){
           hand.startGame();
           expect(hand.currCards.length).toEqual(2);
           expect(deck.cards.length).toEqual(50);
           expect(deck._suits.includes(hand.currCards[0][0])).toBeTruthy();
           expect(deck._suits.includes(hand.currCards[1][0])).toBeTruthy();
           expect(deck._values.includes(hand.currCards[0][1])).toBeTruthy();
           expect(deck._values.includes(hand.currCards[1][1])).toBeTruthy();
       });
   });
});