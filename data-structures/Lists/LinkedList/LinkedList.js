/**
 * @author Michael Wilson
 * @version 1.0.0
 * @description Linked list class
 */

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

export default class LinkedList {
  constructor(head) {
    this.head = head;
    this.size = 0;
  }

  /**
   * @method add
   * @description Adds an element to the front of the list
   *
   * @param {*} value
   */
  add(value) {
    this.addAtIndex(value, 0);
  }

  /**
   * @method addAtIndex
   * @description adds a value to a specific index
   *
   * @param {*} value
   * @param {number} index
   */
  addAtIndex(value, index) {
    this.checkInBounds(index);
    const newNode = new LinkedListNode(value);

    // deal with the front case
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currIndex = 0;
      let currNode = this.head;
      while (currIndex < index) {
        currIndex++;
        currNode = currNode.next;
      }
      if (currNode.next) {
        newNode.next = currNode.next.next;
      }
      currNode.next = newNode;
    }
    this.size++;
  }

  /**
   * @method remove
   * @description Removes a node from the front by default
   */
  remove() {
    this.removeAtIndex(0);
  }

  /**
   * @method removeAtIndex
   * @description Removes a node at a specific index
   *              RT: O(n)
   *              SC: O(1)
   *
   * @param {number} index
   */
  removeAtIndex(index) {
    this.checkInBounds(index);

    // front case
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let currIndex = 0;
      let currNode = this.head;
      while (currIndex < index - 1) {
        currNode = currNode.next;
        currIndex++;
      }
      currNode.next = currNode.next.next;
    }

    this.size--;
  }

  /**
   * @method indexOf
   * @description Finds the index of the targetvalue
   *              RT: O(n)
   *              SC: O(1)
   *
   * @param {*} target
   *
   * @returns node reference if found, otherwise null
   */
  indexOf(targetValue) {
    let currNode = this.head;
    let index = 0;
    while (currNode !== null) {
      if (currNode.value === targetValue) {
        return index;
      }
      currNode = currNode.next;
      index++;
    }
    return -1;
  }

  /**
   * @method getFront
   * @returns the front of the list
   */
  getFront() {
    return this.head;
  }

  /**
   * @method clear
   * @description Clears the contents of the array
   */
  clear() {
    this.head = null;
    this.size = 0;
  }

  /**
   * @method reverse
   * @description Reverses the ordering of the content in the linked list
   */
  reverse() {
    if (this.size > 1) {
      var prev = null;
      var curr = this.head;
      var next = null;
      while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      this.head = prev;
    }
  }

  /**
   * @method isEmpty
   * @description Checks if the list is empty
   * @returns True if the list is empty, false otherwise
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * @method size
   * @description Gets the size of the list
   * @returns The size of the list
   */
  size() {
    return this.size;
  }

  /**
   * @method checkInBounds
   * @description Checks to see if the given index is within the list, if not then an error is thrown
   *
   * @param {number} index
   */
  checkInBounds(index) {
    if (index > this.size) {
      throw new Error(`Index ${index} is out of bounds`);
    }
  }
}
