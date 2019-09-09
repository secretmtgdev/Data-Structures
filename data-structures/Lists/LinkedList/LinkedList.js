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

    // deal with the front case
    if (index === 0) {
      const newNode = new LinkedListNode(value);
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currIndex = 0;
      let currNode = this.head;
      while (currIndex < index) {
        currIndex++;
        currNode = currNode.next;
      }
      currNode.next = currNode.next.next;
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
   * @method find
   * @description Finds the index of the targetvalue
   *              RT: O(n)
   *              SC: O(1)
   *
   * @param {*} target
   *
   * @returns node reference if found, otherwise null
   */
  find(targetValue) {
    let currNode = this.head;
    while (currNode !== null) {
      if (currNode.value === targetValue) {
        return currNode;
      }
      index++;
    }
    return null;
  }

  /**
   * @method checkInBounds
   * @description Checks to see if the given index is within the list, if not then an error is thrown
   *
   * @param {number} index
   */
  checkInBounds(index) {
    if (index >= this.size) {
      throw new Error(`Index ${index} is out of bounds`);
    }
  }
}
