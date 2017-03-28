const assert = require('chai').assert;
const bubbleSort = require('../scripts/bubbleSort')

describe('Bubble Sort Functionality', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  })

  it('should sort an array of numbers', () =>{
    let numArray = [8, 4, 16, 15, 42, 23]

    assert.deepEqual(bubbleSort(numArray), [4, 8, 15, 16, 23, 42])
  })

  it('should sort an array of letters', () =>{
    let letterArray = ["d", "b", "a", "c"]

    assert.deepEqual(bubbleSort(letterArray), ["a", "b", "c", "d"])
  })

})
