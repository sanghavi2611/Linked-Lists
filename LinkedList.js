class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let current = this.headNode;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index < 0) return null;
    let current = this.headNode;
    let i = 0;
    while (current) {
      if (i === index) return current;
      current = current.nextNode;
      i++;
    }
    return null;
  }

  pop() {
    if (!this.headNode) return null;
    if (!this.headNode.nextNode) {
      this.headNode = null;
      return;
    }
    let current = this.headNode;
    while (current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.headNode;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let current = this.headNode;
    let result = '';
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + 'null';
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const prev = this.at(index - 1);
    if (!prev) return;
    const newNode = new Node(value, prev.nextNode);
    prev.nextNode = newNode;
  }

  removeAt(index) {
    if (index === 0) {
      this.headNode = this.headNode ? this.headNode.nextNode : null;
      return;
    }
    const prev = this.at(index - 1);
    if (!prev || !prev.nextNode) return;
    prev.nextNode = prev.nextNode.nextNode;
  }
}

module.exports = LinkedList;
