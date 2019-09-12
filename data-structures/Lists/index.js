/**
 * @author Michael Wilson
 * @version 1.0.0
 *
 * @description This file will serve as the unit testing file
 */

import ArrayList from "./ArrayList/ArrayList.js";
import LinkedList from "./LinkedList/LinkedList.js";

(function() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runProg);
  } else {
    runProg();
  }

  function runProg() {
    runListTests(new ArrayList());
    runListTests(new LinkedList());
  }

  function runListTests(myList) {
    myList.add(1);
    myList.add(2);
    myList.add(3);
    testAdd(myList);
    testRemove(myList);
    testIndexOf(myList);
    testClear(myList);
    testIsEmpty(myList);
  }

  /**
   * @method testAdd
   * @description Tests the add method of a given list
   *
   * @param {*} list
   */
  function testAdd(list) {
    let addValue = 4;
    list.add(addValue);
    console.assert(
      list.indexOf(addValue) !== null || list.indexOf(addValue) !== -1,
      { message: "Could not add the item properly" }
    );
  }

  /**
   * @method testRemove
   * @description Tests the remove method of a given list
   *
   * @param {*} list
   */
  function testRemove(list) {
    let originalSize = list.size;
    list.remove();
    console.assert(list.size === originalSize - 1, {
      message: "Could not successfully remove the item"
    });
  }

  /**
   * @method testIndexOf
   * @description Tests the indexof method of a given list
   *
   * @param {*} list
   */
  function testIndexOf(list) {
    console.assert(list.indexOf(1) === 2, {
      message: "Value of 1 was placed at an unexpected location"
    });
  }

  /**
   * @method testClear
   * @description Tests the clear method of a given list
   *
   * @param {*} list
   */
  function testClear(list) {
    list.clear();
    console.assert(list.size === 0, {
      message: "Was not able to successfully clear the list"
    });
  }

  /**
   * @method testIsEmpty
   * @description Tests the isEmpty method of a given list
   *
   * @param {*} list
   */
  function testIsEmpty(list) {
    console.assert(list.isEmpty(), {
      message: "The list was expected to not be empty but it was..."
    });
  }
})();
