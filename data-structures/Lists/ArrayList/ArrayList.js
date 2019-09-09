/**
 * @author Michael Wilson
 * @version 1.0.0
 * @description ArrayList class
 *              Lists in javascript are very powerful and already have this built in functionality
 *              but I would just like to recreate the wheel here for the sake of learning.
 */

export default class ArrayList {
  constructor(capacity) {
    this.capacity = isNan(capacity) ? 10 : size > 0 ? capacity : 10;
    this.size = 0;
    this.arr = new Array(this.capacity);
  }

  /**
   * @method add
   * @description Adds a value to the start of the list
   *
   * @param {*} value
   */
  add(value) {
    this.addAtIndex(value, 0);
  }

  /**
   * @method addAtIndex
   * @descripition Adds an element to the list at a specific index
   *
   * @param {*} value
   * @param {number} index
   */
  addAtIndex(value, index) {
    this.checkInBounds(index, this.capacity);
    if (this.size === this.capacity) {
      resizeList();
    }
    // handle appending to the end of the list
    if (this.size === index) {
      this.arr[this.size] = value;
    } else {
      // shift right
      for (var i = this.capacity; i > index; i--) {
        this.arr[i] = this.arr[i - 1];
      }
      this.arr[index] = value;
    }
    this.size++;
  }

  /**
   * @method remove
   * @description Removes an element from the front of the list
   */
  remove() {
    this.removeAtIndex(0);
  }

  /**
   * @method removeAtIndex
   * @description Removes a value at a specific index using lazy deletion
   * @param {number} index
   */
  removeAtIndex(index) {
    this.checkInBounds(index);
    if (index === this.size - 1) {
      this.arr[this.size - 1] = null;
    } else {
      // shift left
      for (let i = index; i < this.size - 1; i++) {
        this.arr[i] = this.arr[i + 1];
      }
    }
    this.size--;
  }

  /**
   * @method find
   * @description Finds the first occurrence target value and returns the index of it.
   *
   * @param {*} targetValue
   */
  find(targetValue) {
    let returnIndex = -1;
    for (let i = 0; i < this.size; i++) {
      if (this.arr[i] === targetValue) {
        return i;
      }
    }
    return returnIndex;
  }
  checkInBounds(index, limiter) {
    if (index >= limiter) {
      throw new Error(`Index ${index} is out of bounds`);
    }
  }

  /**
   * @method resizeList
   * @description Doubles the capacity of the current list
   */
  resizeList() {
    this.capacity *= 2;

    // create new array
    let newArr = new Array(this.capacity);

    // copy values from old array to new array
    for (let i = 0; i < this.arr.length; i++) {
      newArr.push(this.arr[i]);
    }

    // set old array to new array
    this.arr = newArr;
  }
}
