var Hand = require('../src/hand');
var Deck = require('../src/deck');

describe('Feature Tests', function(){
    var deck;
    var hand;

   beforeEach(function(){
      deck = new Deck();
      hand = new Hand(deck);

   });

   describe('game logic', function(){
       it('hand receives two cards from deck when game starts', function(){
           deck.shuffle();
           hand.startGame();
           expect(hand.currCards.length).toEqual(2);
           expect(deck.cards.length).toEqual(50);
           expect(deck._suits.includes(hand.currCards[0][0])).toBeTruthy();
           expect(deck._suits.includes(hand.currCards[1][0])).toBeTruthy();
           expect(deck._values.includes(hand.currCards[0][1])).toBeTruthy();
           expect(deck._values.includes(hand.currCards[1][1])).toBeTruthy();
       });

       it('deals 1 card from deck when person chooses hit', function(){
          deck.shuffle();
          hand.hit();
          expect(hand.currCards.length).toEqual(1);
          expect(deck.cards.length).toEqual(51);
          expect(deck._suits.includes(hand.currCards[0][0])).toBeTruthy();
          expect(deck._values.includes(hand.currCards[0][1])).toBeTruthy();
       });

       it('deals 3 cards from unshuffled deck & correctly calculates score', function(){
           hand.startGame();
           hand.hit();
           hand.updateScore();
           expect(hand.score).toEqual(15)
       });
   });
});