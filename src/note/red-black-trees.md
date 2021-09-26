---
title: "Red-Black Trees"
date: "2021-08-19"
---

# Red-Black Trees

Red-black trees are one of many search-tree schemes that are “balanced” in order to guarantee that basic dynamic-set operations take O.lg n/ time in the worst case.

## properties

A __**red-black**__ tree is a binary search tree with one extra bit of storage per node: its color, which can be either RED or BLACK. By constraining the node colors on any simple path from the root to a leaf, red-black trees ensure that no such path is more than twice as long as any other, so that the tree is approximately balanced.

Each node of the tree now contains the attributes color, key, left, right, and p. If a child or the parent of a node does not exist, the corresponding pointer attribute of the node contains the value NIL. We shall regard these NILs as being pointers to leaves (external nodes) of the binary search tree and the normal, key-bearing nodes as being internal nodes of the tree.

A red-black tree is a binary tree that satisfies the following red-black properties:
1. Every node is either red or black.
2. The root is black.
3. Every leaf (NIL) is black.
4. If a node is red, then both its children are black.
5. For each node, all simple paths from the node to descendant(子孫) leaves contain the same number of black nodes.


As an immediate consequence of this lemma, we can implement the dynamic-set
operations SEARCH, MINIMUM, MAXIMUM, SUCCESSOR, and PREDECESSOR
in O.lg n/ time on red-black trees, since each can run in O.h/ time on a binary
search tree of height h (as shown in Chapter 12) and any red-black tree on n nodes
is a binary search tree with height O.lg n/. (Of course, references to NIL in the
algorithms of Chapter 12 would have to be replaced by T:nil.) Although the algorithms
TREE-INSERT and TREE-DELETE from Chapter 12 run in O.lg n/ time
when given a red-black tree as input, they do not directly support the dynamic-set
operations INSERT and DELETE, since they do not guarantee that the modified binary
search tree will be a red-black tree. We shall see in Sections 13.3 and 13.4,
however, how to support these two operations in O.lg n/ time.

SEARCH, MINIMUM, MAXIMUM, SUCCESSOR, and PREDECESSOR time O(lg n)
height O(lg n)
INSERT DELETE O(lg n)

```python

LEFT-ROTATION(T, x)

y = x.right                            // set y
x.right = y.left                       // turn y's left subtree into x's right subtree
if y.left != T.nil                     
    y.left.p = x
y.p = x.p                              // link x's parent to y
if x.p == T.nil
    T.root = y
else if x == x.p.left
    x.p.left = y
else x.p.right = y
y.left = x                             // put x on y's left
x.p = y


RB-INSERT-FIXUP(T, z)

while z.p.color == RED
    if z.p == z.p.p.left
        y = z.p.p.right
        if y.color == RED
            z.p.color == BLACK         // case 1
            y.color = BLACK            // case 1
            z.p.p.color = RED          // case 1
            Z = Z.p.p                  // case 1
        else if z == z.p.right
            z = z.p                  // case 2
            LEFT-ROTATE(T,z)         // case 2
         z.p.color = BALCK           // case 3
         z.p.p.color = RED           // case 3
         RIGHT-ROTATE(T, z.p.p)      // case 3
        else (then)
T.root.color = BLACK

```


case 1: z's uncle y is red

Because z.p.p is black, we can color both z.p and y
black, thereby fixing the problem of z and z.p both being red, and we can
color z.p.p red, thereby maintaining property 5. We then repeat the while loop
with z.p.p as the new node z. The pointer z moves up two levels in the tree.
Now, we show that case 1 maintains the loop invariant at the start of the next
iteration. We use z to denote node z in the current iteration, and z´ = z.p.p
to denote the node that will be called node z at the test in line 1 upon the next
iteration.

Case 2: ´’s uncle y is black and ´ is a right child
Case 3: ´’s uncle y is black and ´ is a left child
In cases 2 and 3, the color of ´’s uncle y is black. We distinguish the two cases
according to whether ´ is a right or left child of ´:p. Lines 10–11 constitute
case 2, which is shown in Figure 13.6 together with case 3. In case 2, node ´
is a right child of its parent. We immediately use a left rotation to transform
the situation into case 3 (lines 12–14), in which node ´ is a left child. Because

both ´ and ´:p are red, the rotation affects neither the black-height of nodes
nor property 5. Whether we enter case 3 directly or through case 2, ´’s uncle y
is black, since otherwise we would have executed case 1. Additionally, the
node ´:p:p exists, since we have argued that this node existed at the time that
lines 2 and 3 were executed, and after moving ´ up one level in line 10 and then
down one level in line 11, the identity of ´:p:p remains unchanged. In case 3,
we execute some color changes and a right rotation, which preserve property 5,
and then, since we no longer have two red nodes in a row, we are done. The
while loop does not iterate another time, since ´:p is now black.
We now show that cases 2 and 3 maintain the loop invariant. (As we have just
argued, ´:p will be black upon the next test in line 1, and the loop body will not
execute again.)
