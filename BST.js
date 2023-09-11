class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  // insert function creates a new node and insert it in tree.
  insert(value) {
    //create new node
    const newNode = new Node(value);
    //case 0 if root == null
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
      while (true) {
        // case 1 if newNode.value = root.value
          if (newNode.value === this.root.value) return undefined;
      // case 2 if newNode.value < root;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      }
      // case 3 if newNode.value > root.value;
      else{
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.left;
      }
    }
    }
    
    // contain function check if value is present in tree or not

    contains(value) {
    let temp = this.root
        //case 0 if root.value is null
        if (this.root == null) return false;
      
        while (temp) {
          //case 1 if value == root.value
          if (value === temp.value) {
            return true;
          }
          //case 2 if value < root.value
          else if (value < temp.value) {
            temp = temp.left;
          }
          // case 3 if value > root.value
          else  {
            temp = temp.right;
          }
        }
      
  }
}
