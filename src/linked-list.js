const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        //this._head = null;
        //this._tail = null;
    }

    append(data) {
        console.log('      !  '+!this._head);
        let node = new Node(data);
        if(!this._head){
            this._head = node;
            this._tail = node;    
        } else {
            node.prev = this._tail;
            this._tail.next = node; 
            this._tail = node;     
        }
        this.length++;
        console.log('node.prev----: '+node.prev);
        console.log('--node.data--: '+node.data);
        console.log('----node.next: '+node.next);
        console.log('head: '+this._head.data);
        console.log('tail: '+this._tail.data);
        console.log('length--------------------------> '+this.length);
    }

    head() {
        console.log('#head(): '+this._head.data);
        return this._head.data;
    }

    tail() {
        console.log('#tail(): '+this._tail.data);
        return this._tail.data;
    }

    at(index) {
        console.log('#at(index) input: '+index);
        let count = 0;
        let current = this._head;
        while (current !== null) 
        {
            console.log('#at curr: '+current.data);
            if(count === index)
                return current.data;
            current = current.next;
            count++;
        }
    }

    insertAt(index, data) {
        console.log('-#inseartAt- index: ['+index+'] data: '+data);
        let count = 0;
        let current = this._head;
        let node = new Node(data);
        if(!this._head && index === 0){
            this._head = node;
            this._tail = node;
        }
        while (current !== null) 
        {
            console.log('#insertAt current.data: '+current.data);
            if(count === index){
                node.prev = current.prev;
                current.prev.next = node;
                node.next = current;
                current.prev = node;
            }
            current = current.next;
            count++;
        }
    }

    isEmpty() {
        return !this._head;
    }

    clear() {
        let node = new Node(null);
        this._head = node;
        this._tail = node;
        this.length = 0;
        //this._head.data = null;
        //this._tail.data = null;
        let count = 0;
        let current = this._head;
        while (current !== null) 
        {
            current = current.next;
            count++;
        }
        console.log('count: ---'+count);
    }

    deleteAt(index) {
        console.log('#deleteAt(index): '+index);
        let count = 0;
        let current = this._head;
        if(index === 0) {
            //let data = this._head.data;
            this._head = this._head.next;
            if (this._head === null) {
                this._tail = null;
            } else {
                this._head.prev = null;
            }
            //this._head.prev = null;
            console.log('prev----: '+current.prev);
            console.log('--data--: '+current.data);
            console.log('----next: '+current.next);
            console.log('head: '+this._head.data);
            console.log('tail: '+this._tail.data);
        }
        while (current !== null) 
        {
            if(count === index){
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
            current = current.next;
            count++;
        }
    }

    reverse() {
        console.log('-=-=-=-=++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        let current = this._head;
        let prev = null;
        
        while(current !== null){
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }
        this._tail = this._head;
        this._head = prev;
        
    }

    indexOf(data) {
        console.log('---- #indexOf(data): '+data);
        let count = 0;
        let current = this._head;
        while (current !== null) 
        {
            if(current.data === data)
                return count;
            current = current.next;
            count++;
        }
        return -1;
    }
}

module.exports = LinkedList;
