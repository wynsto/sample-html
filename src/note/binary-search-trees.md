---
title: "Binary search trees"
date: "2021-08-19"
tag: ['algo']
---

The search tree data structure supports many dynamic-set operations, including
SEARCH, MINIMUM, MAXIMUM, PREDECESSOR, SUCCESSOR, INSERT, and
DELETE. Thus, we can use a search tree both as a dictionary and as a priority
queue.
Basic operations on a binary search tree take time proportional to the height of
the tree. For a complete binary tree with n nodes, such operations run in ‚.lg n/
worst-case time. If the tree is a linear chain of n nodes, however, the same operations
take ‚.n/ worst-case time. We shall see in Section 12.4 that the expected
height of a randomly built binary search tree is O.lg n/, so that basic dynamic-set
operations on such a tree take ‚.lg n/ time on average.
In practice, we can’t always guarantee that binary search trees are built randomly,
but we can design variations of binary search trees with good guaranteed
worst-case performance on basic operations. Chapter 13 presents one such variation,
red-black trees, which have height O.lg n/. Chapter 18 introduces B-trees,
which are particularly good for maintaining databases on secondary (disk) storage.
After presenting the basic properties of binary search trees, the following sections
show how to walk a binary search tree to print its values in sorted order, how
to search for a value in a binary search tree, how to find the minimum or maximum
element, how to find the predecessor or successor of an element, and how to insert
into or delete from a binary search tree. The basic mathematical properties of trees
appear in Appendix B.

# What is a binary search tree?
We can represent such a tree by a linked data structure in which
each node is an object. In addition to a key and satellite data, each node contains
attributes left, right, and p that point to the nodes corresponding to its left child,its right child, and its parent, respectively. If a child or the parent is missing, the
appropriate attribute contains the value NIL. The root node is the only node in the
tree whose parent is NIL.
The keys in a binary search tree are always stored in such a way as to satisfy the
binary-search-tree property:
```
Let x be a node in a binary search tree. If y is a node in the left subtree
of x, then y:key  x:key. If y is a node in the right subtree of x, then
y:key  x:key.
```