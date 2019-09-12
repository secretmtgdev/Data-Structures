/**
 * @author Michael Wilson
 *
 * Special thanks to Numberphiles & Wikipedia!
 */

import ArrayList from "../../data-structures/Lists/ArrayList/ArrayList.js";
import LinkedList from "../../data-structures/Lists/LinkedList/LinkedList.js";

(function() {
  function runProg() {
    linkedListTests();
    arrayListTests();
    var arrList = new ArrayList();
  }

  runProg();

  function linkedListTests() {
    var linkedList = new LinkedList();
    var lastPerson = -1;
    resetList(linkedList);
    lastPerson = simpleJosephus(linkedList);
    console.assert(lastPerson === 1, {
      message: `messed up the algorithm, last person found @${lastPerson}`
    });
    resetList(linkedList);
    lastPerson = complexJosephus(linkedList.size);
    console.assert(lastPerson === 1, {
      message: `messed up the algorithm, last person found @${lastPerson}`
    });
  }

  function arrayListTests() {}

  /**
   * @method resetList
   * @description resets the contents of a list
   * @param {*} list
   */
  function resetList(list) {
    list.clear();
    for (var i = 0; i < 4; i++) {
      list.add(i + 1);
    }
  }

  /**
   * @method simpleJosephus
   * @description Solves the simple case of stepsize being 2 for the Josephus problem
   *
   * @param {*} list The list of people standing in a circle
   *
   * @returns the last person standing
   */
  function simpleJosephus(list) {
    var currentPerson = 1;
    var returnPerson = null;

    // handle singly circular linkedlist
    if (list instanceof LinkedList) {
      var currNode = list.head;
      while (currNode.next) {
        var remRef = currNode;
        // axe off the person
        if (currentPerson % 2 === 0) {
          list.removeAtIndex(currentPerson % list.size);
        }
        currentPerson++;
        currNode = remRef.next;
      }
      returnPerson = currNode.value;
    }

    // handle arraylist, treating it as circular
    if (list instanceof ArrayList) {
      while (list.size > 1) {
        if (currentPerson % 2 === 0) {
          list.removeAtIndex(currentPerson % list.size);
        }
      }
      returnPerson = list.getFront();
    }

    return returnPerson;
  }

  /**
   * @method complexJosephus
   * @description Finds the position that you want to be in with regards to a circle of soldiers
   *
   * @param {number} n The number of people in the circle
   *
   * @returns the index that you would like to be in with regards to this circle
   */
  function complexJosephus(n) {
    var l = n - highestOneBit(n);
    return 2 * l + 1;
  }

  /**
   * @method highestOneBit
   * @description Finds the leading significant bit of a number
   *
   * @param {number} n The number to find the leading sig bit of
   * @returns The number representing just the leading significant bit
   */
  function highestOneBit(n) {
    var highestBitRep = 0;
    var currBit = 0;
    while (n > 0) {
      if (n & 1) {
        highestBitRep = currBit;
      }
      currBit++;
      n >>= 1;
    }
    return Math.pow(2, highestBitRep);
  }
})();
