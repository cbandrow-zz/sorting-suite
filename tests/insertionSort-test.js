const assert = require('chai').assert;
import {insertSort} from '../scripts/insertionSort'
import {ranNums, randomAlphabet} from '../scripts/randomValueGen.js'

describe('Insertion Sort Functionality', () => {
  it('should be a function', () => {
    assert.isFunction(insertSort);
  })

  it('should sort an array of numbers', () =>{
    let numArray = [8, 4, 16, 15]

    assert.deepEqual(insertSort(numArray), [4, 8, 15, 16])
  })

  it('should sort a different array of numbers', () =>{
    let numArray = [10, 18, 4, 50, 25, 40, 1, 18]

    assert.deepEqual(insertSort(numArray), [1, 4, 10, 18, 18, 25, 40, 50])
  })

  it('should sort a different array of negative numbers', () =>{
    let numArray = [-5, 4, -2, 10, -10, 7, -9, -4, 3, 2, 1, -1, 60]

    assert.deepEqual(insertSort(numArray), [ -10, -9, -5, -4, -2, -1, 1, 2, 3, 4, 7, 10, 60])
  })

  it('should sort an array of letters', () =>{
    let letterArray = ["d", "b", "a", "c"]

    assert.deepEqual(insertSort(letterArray), ["a", "b", "c", "d"])
  })

  it('should sort an array of different letters', () =>{
    let letterArray = ["f", "b", "d", "e", "g", "z", "r", "t", "q", "b", "x"]

    assert.deepEqual(insertSort(letterArray), [ 'b', 'b', 'd', 'e', 'f', 'g', 'q', 'r', 't', 'x', 'z' ])
  })

  it ('it should check an array of random numbers.', () =>{
    let numberArray = ranNums(1, 100, 150);
    let checkRanNums = insertSort(numberArray);

    assert.deepEqual(checkRanNums[1] >= checkRanNums[0], true);
    assert.deepEqual(checkRanNums[5] >= checkRanNums[3], true);
    assert.deepEqual(checkRanNums[10] <= checkRanNums[13], true);
  })

  it ('it should check the largest number is last', () =>{
    let numberArray = ranNums(1, 100, 150);
    let checkRanNums = insertSort(numberArray);

    assert.deepEqual(checkRanNums[checkRanNums.length - 1] >= checkRanNums[checkRanNums.length - 2], true)
  })

  it ('it should check an array of random letters.', () =>{
    let letterArray = randomAlphabet(50);
    let checkRanLetters = insertSort(letterArray);

    assert.deepEqual(checkRanLetters[1] >= checkRanLetters[0], true);
    assert.deepEqual(checkRanLetters[5] >= checkRanLetters[3], true);
    assert.deepEqual(checkRanLetters[10] <= checkRanLetters[13], true);
  })

  it ('it should check that the last letter comes latest in the alphabet', () =>{
    let letterArray = randomAlphabet(50);
    let checkRanLetters = insertSort(letterArray);

    assert.deepEqual(checkRanLetters[checkRanLetters.length - 1] >= checkRanLetters[checkRanLetters.length - 2], true)
  })


})
