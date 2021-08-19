function parent(index) {
  return Math.floor((index-1)/ 2)
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function getLeft(index) {
  return 2 * (index + 1) - 1
}

function getRight(index) {
  return 2 * (index + 1)
}


let PQ = function(heap) {
  this.heap = heap
}


PQ.prototype.insert = function(num) {
  this.heap.length = this.heap.length + 1
  this.heap[this.heap.length - 1] = -Infinity
  this.increaseKey(this.heap.length - 1, num)
}

PQ.prototype.maximum = function() {
  return this.heap[0]
}

PQ.prototype.extractMax = function() {
  if (this.heap.length < 1) {
    return null
  }
  const max = this.heap[0]
  this.heap[0] = this.heap[this.heap.length - 1]
  this.heap.length = this.heap.length - 1
  heapfy(this.heap, 0)
  // console.log(this.heap)
  return max
}

PQ.prototype.increaseKey = function(index, key) {
  if (key < this.heap[index]) {
    return false
  }

  this.heap[index] = key

  while (index > 0 && this.heap[parent(index)] < this.heap[index]) {
    swap(this.heap, index, parent(index))
    index = parent(index)
  }

}

function heapfy(heap, index) {
  const left = getLeft(index)
  const right = getRight(index)
  let largest
  if(left < heap.length && heap[left] > heap[index]) {
    largest = left
  } else {
    largest = index
  }

  if (right < heap.length && heap[right] > heap[largest]) {
    largest = right
  }

  if (largest != index) {
    swap(heap, index, largest)
    heapfy(heap, largest)
  }
}



const heap = new PQ([])

const num = 10000000
const arr = []
let max = -Infinity
for(let i = 0; i < num; i++) {
  const value = Math.round(Math.random()* num) 
  // console.log(value)
  max = Math.max(value, max)
  arr.push(value)
  heap.insert(value)
}
console.log(max)
console.log(heap.maximum())
console.log(heap.heap.slice(0, 100))

