# Linked List

A JavaScript implementation of a singly linked list data structure, built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

## What is a Linked List?

A linked list is a linear data structure where each element (node) contains a value and a pointer to the next node. Unlike arrays, linked lists don't store elements in contiguous memory — each node can live anywhere and simply points to the next one.

```
head → ( dog ) → ( cat ) → ( parrot ) → null
```

## Classes

### `Node`

Represents a single element in the list.

- `value` — the data stored in the node
- `nextNode` — reference to the next node (defaults to `null`)

### `LinkedList`

Manages the chain of nodes.

- `head` — reference to the first node (defaults to `null`)
- `tail` — reference to the last node (defaults to `null`)

## Methods

| Method                       | Description                                                              |
| ---------------------------- | ------------------------------------------------------------------------ |
| `append(value)`              | Adds a node to the end of the list                                       |
| `prepend(value)`             | Adds a node to the start of the list                                     |
| `size()`                     | Returns the total number of nodes                                        |
| `getHead()`                  | Returns the first node                                                   |
| `tail()`                     | Returns the last node                                                    |
| `at(index)`                  | Returns the node at the given index                                      |
| `pop()`                      | Removes the last node                                                    |
| `contains(value)`            | Returns `true` if value exists, `false` if not                           |
| `findIndex(value)`           | Returns the index of the node with the given value, or `-1` if not found |
| `toString()`                 | Returns a string representation of the list                              |
| `insertAt(index, ...values)` | Inserts one or more values at the given index                            |
| `removeAt(index)`            | Removes the node at the given index                                      |

## Usage

```javascript
const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');

console.log(list.toString());
// ( dog ) -> ( cat ) -> ( parrot ) -> null

console.log(list.size()); // 3
console.log(list.at(1)); // Node { value: 'cat', nextNode: ... }
console.log(list.contains('cat')); // true

list.insertAt(1, 'hamster');
// ( dog ) -> ( hamster ) -> ( cat ) -> ( parrot ) -> null

list.removeAt(0);
// ( hamster ) -> ( cat ) -> ( parrot ) -> null
```

## What I Learned

- How nodes link together using pointers
- Traversing a list to find, insert, or remove nodes
- Handling edge cases, empty lists, single nodes, out of bounds indices
- The difference between O(n) traversal and O(1) direct access
