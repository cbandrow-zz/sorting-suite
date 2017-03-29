const assert = require('chai').assert;

import {mergeSort, mergeArrays} from '../scripts/mergeSort.js'

describe('Merge Sort Functionality', () => {

  let randomNumbers = []
  let randomCharacters = []
  let possibleChars = "abcdefghijklmnopqrstuvwxyz";

  function ranNums (min, max, number) {
    for (let i = 0; i < number; i ++) {
      randomNumbers.push(Math.floor(Math.random() * max - min));
    }
  }

  function randomAlphabet (maxChar) {
    for (let i = 0; i < maxChar; i ++) {
      let letters = possibleChars.charAt(Math.floor(Math.random() *
      possibleChars.length))

      randomCharacters.push(letters);
    }
  }

  it('should be a function', () => {
    assert.isFunction(mergeSort);
  })

  it('should sort an array of numbers', () =>{
    let numArray = [8, 4, 16, 15]

    assert.deepEqual(mergeSort(numArray), [4, 8, 15, 16])
  })

  it('should sort an array of letters', () =>{
    let letterArray = ["d", "b", "a", "c"]

    assert.deepEqual(mergeSort(letterArray), ["a", "b", "c", "d"])
  })

  it ('it should check an array of random numbers.', () =>{
    ranNums()
    let numberArray = randomNumbers
    let checkRandoms = mergeSort(numberArray)

    assert.deepEqual(checkRandoms[1] >= checkRandoms[0], true);

  })

  it ('it should check the largest number is last', () =>{
    ranNums(1, 250, 2500)
    let numberArray = randomNumbers
    let checkRandoms = mergeSort(numberArray)

    assert.deepEqual(checkRandoms[checkRandoms.length - 1] >= checkRandoms[checkRandoms.length - 2], true)
  })

  it.skip ('it should check an array of random letters.', () =>{
    randomAlphabet(26)
    let letterArray = randomCharacters
    let checkLetters = mergeSort(letterArray);

    assert.deepEqual(checkLetters[1] >= checkLetters[0], true);
    assert.deepEqual(checkLetters[5] >= checkLetters[3], true);
    assert.deepEqual(checkLetters[10] <= checkLetters[13], true);
  })

  it.only('it should check that the last letter comes latest in the alphabet', () =>{
    randomAlphabet(26)
    let letterArray = randomCharacters
    let checkLetters = mergeSort(letterArray);

    assert.deepEqual(checkLetters[checkLetters.length - 1] >= checkLetters[checkLetters.length - 2], true)
  })

})

describe('Merge Arrays testing functionality', () => {

})
