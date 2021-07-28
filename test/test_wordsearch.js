const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });
  it('Should return true if the word is present vertically', function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'M', 'U', 'A', 'L'],
      ['S', 'X', 'P', 'T', 'I', 'F', 'Q', 'R'],
      ['Y', 'F', 'C', 'F', 'C', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'H', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'A', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'E', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'L', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'MICHAEL')

    assert.isTrue(result);
  });
  it('Should return false if given an empty array', function() {
    const result = wordSearch([], 'ANY WORD');
    assert.isFalse(result);
  });
  it('Should return true if the word is present backwards horizontally', function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'H', 'U', 'A', 'L'],
      ['S', 'X', 'P', 'T', 'Q', 'F', 'Q', 'R'],
      ['Y', 'F', 'C', 'F', 'R', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'T', 'V', 'R', 'G'],
      ['W', 'H', 'E', 'S', 'A', 'R', 'H', 'P'],
      ['B', 'F', 'R', 'E', 'G', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'K', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'P', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'F', 'U', 'A', 'L'],
    ], 'PHRASE')
    assert.isTrue(result);
  });
  it('Should return true if word is present backwards vertically', () => {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'H', 'U', 'A', 'L'],
      ['S', 'X', 'P', 'T', 'Y', 'F', 'Q', 'R'],
      ['Y', 'F', 'C', 'F', 'T', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'S', 'V', 'R', 'G'],
      ['W', 'H', 'E', 'S', 'O', 'R', 'H', 'P'],
      ['B', 'F', 'R', 'E', 'R', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'F', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'P', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'F', 'U', 'A', 'L'],
    ], 'FROSTY')
    assert.isTrue(result);
  });
});
