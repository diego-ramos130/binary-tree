'use strict';

function fbChecker(node) {
  if (node.value % 15 === 0) {
    node.value = 'fizzbuzz';
  } else if (node.value % 5 === 0) {
    node.value = 'buzz';
  } else if (node.value % 3 === 0) {
    node.value = 'fizz';
  }
}
function traversal(root) {
  if (root === null) {
    return undefined;
  }
  traversal(root.left);
  fbChecker(root);
  traversal(root.right);
  return undefined;
}

module.exports = function fizzBuzzTree(tree) {
  traversal(tree.root);
  return tree;
};
