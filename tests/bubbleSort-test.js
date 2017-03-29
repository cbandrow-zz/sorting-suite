require("locus");
const assert = require('chai').assert;
const bubbleSort = require('../scripts/bubbleSort')

describe('Bubble Sort Functionality', () => {
  let randomNumbers = []
  let randomCharacters = []
  let possibleChars = "abcdefghijklmnopqrstuvwxyz";

  function ranNums() {
    for (let i = 0; i < 15; i ++) {
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
    assert.isFunction(bubbleSort);
  })

  it('should sort an array of numbers', () =>{
    let numArray = [8, 4, 16, 15]

    assert.deepEqual(bubbleSort(numArray), [4, 8, 15, 16])
  })

  it('should sort an array of letters', () =>{
    let letterArray = ["d", "b", "a", "c"]

    assert.deepEqual(bubbleSort(letterArray), ["a", "b", "c", "d"])
  })

  it ('it should check an array of random numbers.', () =>{
    let numberArray = randomNumbers

    bubbleSort(numberArray);
    assert.deepEqual(numberArray[1] >= numberArray[0], true);
    assert.deepEqual(numberArray[5] >= numberArray[3], true);
    assert.deepEqual(numberArray[10] <= numberArray[13], true);
  })

  it ('it should check the largest number is last', () =>{
    let numberArray = randomNumbers
    bubbleSort(numberArray);
    assert.deepEqual(numberArray[numberArray.length - 1] >= numberArray[numberArray.length - 2], true)
  })

  it ('it should check an array of random letters.', () =>{
    let letterArray = randomCharacters

    bubbleSort(letterArray);
    assert.deepEqual(letterArray[1] >= letterArray[0], true);
    assert.deepEqual(letterArray[5] >= letterArray[3], true);
    assert.deepEqual(letterArray[10] <= letterArray[13], true);
  })

  it('it should check that the last letter comes latest in the alphabet', () =>{
    let letterArray = randomCharacters;
    bubbleSort(letterArray);
    assert.deepEqual(letterArray[letterArray.length - 1] >= letterArray[letterArray.length - 2], true)
  })


})
