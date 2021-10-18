const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

/* class Node {
  constructor() {
    this.value = value;
    this.left = null;
    this.right = null;
  }
} */
module.exports = class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    this.head = addIn(this.head, data);

    function addIn(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addIn(node.left, data);
      } else {
        node.right = addIn(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchIn(this.head, data);

    function searchIn(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data < data) {
        return searchIn(node.right, data);
      } else {
        return searchIn(node.left, data);
      }
    }
  }

  find(data) {
    return findIn(this.head, data);

    function findIn(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        return findIn(node.right, data);
      } else {
        return findIn(node.left, data);
      }
    }
  }

  remove(data) {
    this.head = removeIn(this.head, data);

    function removeIn(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeIn(node.left, data)
        return node;
      } else if (node.data < data) {
        node.right = removeIn(node.right, data)
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;

        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;
        node.right = removeIn(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node.right) {
      node = node.right;
    }
    return node.data;
  }

}