class _Node {
  constructor(value) {
      this.value=value,
      this.next=null,
      this.prev=null;
  }
}


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
       
        const node = new _Node(data);

      
        if (this.first === null) {
            this.first = node;
        }
     
        if (this.last) {
            node.prev = this.last;
            this.last.next = node;
        }

        this.last = node;
  }

  dequeue() {
     
    if (this.first === null) {
          return;
      }
   
    const node = this.first;
    this.first = node.next;
    
    if (node === this.last) {
        this.last = null;
    }
    return node.value;
  }
  

  showNext() {
    
    if (this.first === null) {
      return null; 
    }
    return this.first.value;
  }

  all() {

    if (this.first === null) {
      return []; 
    }

    let node = this.first;
    let arr = []

    while (node.next !== null) { 
      arr.push(node.value);
      node = node.next; 
    }
    arr.push(node.value);
    return arr; 
  }
}

module.exports = Queue