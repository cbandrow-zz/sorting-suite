const assert = require('chai').assert;

import {mergeSort, mergeArrays} from '../scripts/mergeSort.js'

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

})
