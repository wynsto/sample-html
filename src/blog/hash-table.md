---
title: "Hash Table"
date: "2021-08-19"
---
the average time to search for an element in a hash table is O(1)

the basic dicitionary operations require O(1)

JavaScript Object is 
JS objects and arrays — Which one is faster? 

[JS objects and arrays — Which one is faster? ](https://sherryhsu.medium.com/js-objects-and-arrays-which-one-is-faster-cfcdb1281704)

JS HashTable open addressing
```
HashTable is a subclass of FixedArray that implements a hash table
that uses open addressing and quadratic probing.

In order for the quadratic probing to work, elements that have not
yet been used and elements that have been deleted are
distinguished.  Probing continues when deleted elements are
encountered and stops when unused elements are encountered.

- Elements with key == undefined have not been used yet.
- Elements with key == the_hole have been deleted.

The hash table class is parameterized with a Shape.
Shape must be a class with the following interface:
  class ExampleShape {
  public:
    Tells whether key matches other.
    static bool IsMatch(Key key, Object other);
    Returns the hash value for key.
    static uint32_t Hash(ReadOnlyRoots roots, Key key);
    Returns the hash value for object.
    static uint32_t HashForObject(ReadOnlyRoots roots, Object object);
    Convert key to an object.
    static inline Handle<Object> AsHandle(Isolate* isolate, Key key);
    The prefix size indicates number of elements in the beginning
    of the backing storage.
    static const int kPrefixSize = ..;
    The Element size indicates number of elements per entry.
    static const int kEntrySize = ..;
    Indicates whether IsMatch can deal with other being the_hole (a
    deleted entry).
    static const bool kMatchNeedsHoleCheck = ..;
  };
The prefix size indicates an amount of memory in the
beginning of the backing storage that can be used for non-element
information by subclasses.
```

### [Big O Cheat Sheet/](https://www.bigocheatsheet.com)
>https://www.bigocheatsheet.com/

Objects and arrays are 2 basic data structures in JavaScript and both offer different methods for storing and retrieving data — at different speeds.
Which data structure is more performant? Which one should I use in my code? Lets take a look at the time complexity involved.

What is Time Complexity?
Given n items, what is the most number of operations needed to complete the task (your function) at hand?
A for loop in the function looping through n items means the number of operations (complexity) scale linearly with n. O(n)
Likewise, a nested for loop means the complexity would scale quadratic-ally with n. O(n^2)
Using Big-O notation, O(), we can describe the approximate time complexity and the worst case performance for large n. See Big O Cheatsheet for more info.
Back to Arrays. Each item in the array is stored in consecutive blocks of memory and has an index, which makes retrieving data easy as long as you know the index of the item.
Look up, Assign value: O(1) constant time complexity because there is no item shuffling involved. On the other hand, Insert, Remove (at a specified index) and Find have O(n) linear time complexity because you need to move/look through all n items in the worst case scenario. Even though Pushing a value into an array that resizes itself when it gets full has the time complexity of Amortized Constant.
Lets take a look at the objects. Objects are stored in the for of a key/value pair {key: value}. JavaScript objects are implemented using Hash tables under the hood. One thing about Hashing table is that — Hash tables Retrieve method have O(1), constant time complexity because of the use of a hashing function. The hashing function takes in the key and returns the associated index for the value which enables constant time lookup and retrieve.
In summary —
Arrays: constant time lookup, linear insertion and removal (e.g. unshift() and shift()).
Objects: constant time lookup, contant insertion and retrieve
Obviously, objects are doing much better with more CONSTANT operations! How is it possible..? Because of this magic….. Hashing Function!
Swaying from the main topic…
Hashing Function
Yes, hashing function is just like…. MAGIC!
— It returns only numbers within the bound of the available indices (so it knows the length of the current storage)
— For a given key, it always outputs the same index value
— Doesnt remember what storage location has been used (well, if the hashing function DOES remember and try avoiding saving values to the same location…. it will be O(n) to loop through existing stored values!)

What if Hashing Function produces duplicate hashed index for different keys?
Oh well, too bad, Hashing Tables just need to learn and handle it… in its structure. By storing an array of tuples {key: value} in the hashed index, we can avoid overwriting existing values! :D Although it does make the structure more complicated and you need to loop through the tuples (a small loop) for retrieval, the time complexity of looping through tuples is small that it could be ignored.

### dividing hashing

### multiply hashing

### universal hashing



### open addressing

#### probe sequence probing
```

HASH-INSERT(T, k)
i = 0
repeat
    j = h(k, i)
    if T[j] == NIL
        T[j] = k
        return j
    else i = i + 1
until i == m
error "hash table overflow"


HASH-SEARCH(T, k)
i = 0
repeat
    j = h(k, j)
    if T[j] == k
        return k
    i = i + 1
until T[j] == NIL or i == m
return NIL

```

#### linear probing

```
h(k, i) = (h'(k) + i)mod m, i = 0, 1, 2, ..., m - 1
```

problem:primary clustering

#### quadratic probing

```
h(k, i) = (h'(k) + c1 * i + c2 * i *i)mod m
```

problem: secondary clustering

#### double hashing

```
h(k, i) = (h1(k) + ih2(k))mod m
```

