import {assert} from 'chai'
import {mergeSort, mergeArrays} from '../scripts/mergeSort.js'
import {ranNums, randomAlphabet} from '../scripts/randomValueGen.js'

describe('Merge Sort Functionality', () => {

  it('should be a function', () => {
    assert.isFunction(mergeSort);
  })

  it('should sort an array of numbers', () =>{
    let numArray = [8, 4, 16, 15]

    assert.deepEqual(mergeSort(numArray), [4, 8, 15, 16])
  })

  it('should sort a different array of numbers', () =>{
    let numArray = [10, 18, 4, 50, 25, 40, 1, 18]

    assert.deepEqual(mergeSort(numArray), [1, 4, 10, 18, 18, 25, 40, 50])
  })

  it('should sort a different array of negative numbers', () =>{
    let numArray = [-5, 4, -2, 10, -10, 7, -9, -4, 3, 2, 1, -1, 60]

    assert.deepEqual(mergeSort(numArray), [ -10, -9, -5, -4, -2, -1, 1, 2, 3, 4, 7, 10, 60])
  })

  it('should sort an array of letters', () =>{
    let letterArray = ["d", "b", "a", "c"]

    assert.deepEqual(mergeSort(letterArray), ["a", "b", "c", "d"])
  })

  it('should sort an array of different letters', () =>{
    let letterArray = ["f", "b", "d", "e", "g", "z", "r", "t", "q", "b", "x"]

    assert.deepEqual(mergeSort(letterArray), [ 'b', 'b', 'd', 'e', 'f', 'g', 'q', 'r', 't', 'x', 'z' ])
  })

  it ('it should check an array of random numbers.', () =>{
    let numberArray = ranNums(1, 100, 150)
    let checkRandoms = mergeSort(numberArray)

    assert.deepEqual(checkRandoms[1] >= checkRandoms[0], true);

  })

  it ('it should check the largest number is last', () =>{
    let numberArray = ranNums(1, 500, 150)
    let checkRandoms = mergeSort(numberArray)

    assert.deepEqual(checkRandoms[checkRandoms.length - 1] >= checkRandoms[checkRandoms.length - 2], true)
  })

  it ('it should check an array of random letters.', () =>{
    let letterArray = randomAlphabet(50)
    let checkLetters = mergeSort(letterArray);

    assert.deepEqual(checkLetters[1] >= checkLetters[0], true);
    assert.deepEqual(checkLetters[5] >= checkLetters[3], true);
    assert.deepEqual(checkLetters[10] <= checkLetters[13], true);
  })

  it('it should check that the last letter comes latest in the alphabet', () =>{
    let letterArray = randomAlphabet(50)
    let checkLetters = mergeSort(letterArray);

    assert.deepEqual(checkLetters[checkLetters.length - 1] >= checkLetters[checkLetters.length - 2], true)
  })

  it('the starting length should be the same as the ending length', () =>{
    let letterArray = randomAlphabet(50)
    let checkLetters = mergeSort(letterArray);

    assert.deepEqual(letterArray.length === checkLetters.length, true)
  })
})

describe('Merge Arrays testing functionality', () => {

  it('should be a function', () => {
    assert.isFunction(mergeArrays);
  })

  it('should merge two split arrays', () => {
    let arr1 = [5]
    let arr2 = [4]

    let merged = mergeArrays(arr1, arr2);

    assert.deepEqual(merged, [4, 5])
  })

})
