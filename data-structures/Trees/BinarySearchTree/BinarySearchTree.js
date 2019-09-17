/**
 * @author Michael Wilson
 * @description This file is my javascript rendition of a Binary Search Tree
 * A BST is a tree in which for every node, it's left subtree consists of values
 * that are less than or equal to the current node value, while the right subtree
 * consists of nodes that are greater in value than the current node
 *
 * @version 1.0.0
 */

export class BSTNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export default class BST {
  constructor(root = null) {
    this.root = root;
  }

  /**
   * @method add
   * @description Adds a new node to the tree
   *
   * @param {number} newValue
   */
  add(newValue) {
    this.root = this.addHelper(newValue, this.root);
  }

  /**
   * @method addHelper
   * @description Helps adding a node to the tree by finding the appropriate location
   *
   * @param {number} newValue
   * @param {BSTNode} currNode
   */
  addHelper(newValue, currNode) {
    if (!currNode) {
      return new BSTNode(newValue);
    } else {
      if (newValue <= currNode.value) {
        currNode.left = this.addHelper(newValue, currNode.left);
      } else {
        currNode.right = this.addHelper(newValue, currNode.right);
      }
      return currNode;
    }
  }

  /**
   * @method find
   * @param {number} targetValue
   *
   * @returns The BSTNode which contains the respective value
   */
  find(targetValue) {
    this.findHelper(targetValue, this.root);
  }

  /**
   * @method findHelper
   * @description Helper function to traverse through the tree
   *
   * @param {number} targetValue
   * @param {BSTNode} root
   *
   * @returns the BSTNode which contains the respective value
   */
  findHelper(targetValue, currNode) {
    if (!currNode) {
      return null;
    } else {
      if (currNode.value === targetValue) {
        return currNode;
      } else if (targetValue <= currNode.value) {
        this.findHelper(targetValue, currNode.left);
      } else {
        this.findHelper(targetValue, currNode.right);
      }
    }
  }

  /***************************
   ***** Tree Traversals *****
   ***************************/
  /**
   * @method preOrder
   * @param {BSTNode} rootNode
   */
  preOrder(rootNode) {
    if (rootNode) {
      console.log(rootNode.data);
      this.preOrder(rootNode.left);
      this.preOrder(rootNode.right);
    }
  }

  /**
   * @method inOrder
   * @param {BSTNode} rootNode
   */
  inOrder(rootNode) {
    if (rootNode) {
      this.inOrder(rootNode.left);
      console.log(rootNode.data);
      this.inOrder(rootNode.right);
    }
  }

  /**
   * @method postOrder
   * @param {BSTNode} rootNode
   */
  postOrder(rootNode) {
    if (rootNode) {
      this.postOrder(rootNode.left);
      this.postOrder(rootNode.right);
      console.log(rootNode.data);
    }
  }
}
