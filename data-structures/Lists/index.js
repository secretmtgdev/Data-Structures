(function() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runProg);
  } else {
    runProg();
  }

  function runProg() {
    runArrayListTests();
    runLinkedListTests();
  }

  // ArrayList tests
  function runArrayListTests() {}

  // LinkedList tests
  function runLinkedListTests() {}

  /**
   * @method testAdd
   * @description Tests the add method of a given list
   *
   * @param {*} list
   */
  function testAdd(list) {}

  /**
   * @method testRemove
   * @description Tests the remove method of a given list
   *
   * @param {*} list
   */
  function testRemove(list) {}

  /**
   * @method testFind
   * @description Tests the find method of a given list
   *
   * @param {*} list
   */
  function testFind(list) {}
})();
