const assert = require('chai').assert;
const insertSort = require('../scripts/insertionSort')

describe('Insertion Sort Functionality', () => {

  let randomNumbers = []
  let randomCharacters = []
  let possibleChars = "abcdefghijklmnopqrstuvwxyz";

  function ranNums() {
    for (let i = 0; i < 20; i ++) {
      randomNumbers.push(Math.floor(Math.random() * 100 - 1));
    }
  }
  ranNums();

  function ranAlphabet() {
    for (let i = 0; i < 27; i ++) {
      let letters = possibleChars.charAt(Math.floor(Math.random() *
      possibleChars.length))

      randomCharacters.push(letters);
    }
  }
  ranAlphabet();

  it('should be a function', () => {
    assert.isFunction(insertSort);
  })

})
