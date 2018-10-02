'use strict';

const fizzBuzz = require('../lib/fizzBuzzTree');
const Node = require('../lib/Node');
const Tree = require('../lib/Tree');

const tree = new Tree(5);
tree.root.left = new Node(3);
tree.root.right = new Node(15);

const messedUpTree = new Tree(1);
messedUpTree.root.left = new Node(2);
messedUpTree.root.right = new Node(4);

const real = new Tree(1);
real.root.right = new Node(3);
real.root.left = new Node(5);
real.root.right.right = new Node(15);
real.root.right.left = new Node(4);
real.root.left.left = new Node(2);


describe('fizzbuzz binary tree replacer', () => {
  test('should just run fine in the case of best use', () => {
    fizzBuzz(tree);
    expect(tree.root.value).toEqual('buzz');
    expect(tree.root.left.value).toEqual('fizz');
    expect(tree.root.right.value).toEqual('fizzbuzz');
  });
  test('should not change anything if given a messed up tree', () => {
    fizzBuzz(messedUpTree);
    expect(messedUpTree.root.value).toEqual(1);
    expect(messedUpTree.root.left.value).toEqual(2);
    expect(messedUpTree.root.right.value).toEqual(4);
  });
  test('should change some things if given a realistic tree', () => {
    fizzBuzz(real);
    expect(real.root.value).toEqual(1);
    expect(real.root.right.value).toEqual('fizz');
    expect(real.root.left.value).toEqual('buzz');
    expect(real.root.right.right.value).toEqual('fizzbuzz');
    expect(real.root.right.left.value).toEqual(4);
    expect(real.root.left.left.value).toEqual(2);
  });
});
