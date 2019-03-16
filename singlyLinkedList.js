// What is a linked list?
// Its a data structure that stores any element such as a string number or array and it's ordered
// It's different from an array. We can't use indecies to acces the value in a linked list
// Each element is called 
class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(head,tail,length) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode  = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("grandpa");
list.push("Hi puppy")
list.push("Hi doggy")
list.push("Hi kitty")
list.push("Hi tootie")


console.log(list);