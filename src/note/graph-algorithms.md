---
title: "Graph Algorithms"
date: "2021-08-20"
tag: ['algo']
---

## Breadth-first search
Breadth-first search is one of the simplest algorithms for searching a graph and the archetype for manage important graph algorithms.

Prim's minimum-spanning-tree algorithm and Dijkstra's single-source shortest-paths algorithm use ideas similar to those in breadth-first search.

Given a graph G = (V, E) and a  distinguished source vertex s, breadth-first search systematically explores the edges of G to "discover" every vertex that is reachable from s. It computes the distance(smallest number of edges) from s to each reachable vertex. It computes the distance (smallest number of edges) from s to each reachable vertex. It also produces a "breadth-first tree" with root s that contains all reachable vertices. For any vertex v reachable from s, the simple path in the breadth -first tree from s to v corresponds to a "shortest path" from s to v in G, that is, a path containing the smallest number of edges. The algorithm works on both directed and undirected graphs. 

Breadth-first search is so named because it expands the frontier between discovered
and undiscovered vertices uniformly across the breadth of the frontier. That
is, the algorithm discovers all vertices at distance k from s before discovering any
vertices at distance k C 1.

To keep track of progress, breadth-first search colors each vertex white, gray, or
black. All vertices start out white and may later become gray and then black. A
vertex is discovered the first time it is encountered during the search, at which time
it becomes nonwhite. Gray and black vertices, therefore, have been discovered, but
breadth-first search distinguishes between them to ensure that the search proceeds
in a breadth-first manner.1 If .u; / 2 E and vertex u is black, then vertex 
is either gray or black; that is, all vertices adjacent to black vertices have been
discovered. Gray vertices may have some adjacent white vertices; they represent
the frontier between discovered and undiscovered vertices.

Breadth-first search constructs a breadth-first tree, initially containing only its
root, which is the source vertex s. Whenever the search discovers a white vertex 
in the course of scanning the adjacency list of an already discovered vertex u, the
vertex  and the edge .u; / are added to the tree. We say that u is the predecessor
or parent of  in the breadth-first tree. Since a vertex is discovered at most once, it
has at most one parent. Ancestor and descendant relationships in the breadth-first
tree are defined relative to the root s as usual: if u is on the simple path in the tree
from the root s to vertex , then u is an ancestor of  and  is a descendant of u.

The breadth-first-search procedure BFS below assumes that the input graph
G = (V, E) is represented using adjacency lists. It attaches several additional
attributes to each vertex in the graph. We store the color of each vertex u 2 V
in the attribute u:color and the predecessor of u in the attribute u:. If u has no
predecessor (for example, if u D s or u has not been discovered), then u: D NIL.
The attribute u:d holds the distance from the source s to vertex u computed by the
algorithm. The algorithm also uses a first-in, first-out queue Q (see Section 10.1)
to manage the set of gray vertices.