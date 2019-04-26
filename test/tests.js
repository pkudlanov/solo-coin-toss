import headsTailsCalculator from "../src/heads-tails-function.js";

const test = QUnit.test;

test('Chooses heads if input is less then .5', function(assert) {
    const input = .4999999;
    const expected = 'heads';

    const result = headsTailsCalculator(input);

    assert.equal(result, expected);
});
 
test('Chooses tails if input is .5 or greater', function(assert){
    const input = .5
    const expected = 'tails';

    const result = headsTailsCalculator(input);

    assert.equal(result, expected);
})

import betSizeChecker from "../src/bet-size-checker.js";
test('Checks that bet is no bigger then the amount of money they have.', function(assert){
    const bet = 1001;
    const moneyHas = 1000;
    const expected = false;

    const result = betSizeChecker(bet, moneyHas);

    assert.equal(result, expected);
})

test('If bet is not bigger then how much money they have returns true.', function(assert){
    const bet = 999;
    const moneyHas = 1000;
    const expected = true;

    const result = betSizeChecker(bet, moneyHas);

    assert.equal(result, expected);
})