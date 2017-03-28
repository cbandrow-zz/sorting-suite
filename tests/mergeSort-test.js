const assert = require('chai').assert;
const mergeSort = require('../scripts/mergeSort.js')

describe('Merge Sort Functionality', () => {

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
    assert.isFunction(mergeSort);
  })

  it('should sort a small string of numbers', () => {
    assert.equal(mergeSort);
  })

})
