class Queue {
    constructor() {
        this.dataStore = [];
    }

    //adds element to end of Queue
    enqueue(element) {
        this.dataStore.push(element);
    }

    //removes element from front of queue
    dequeue() {
        return this.dataStore.shift();
    }

    //clears out queue
    clear() {
        this.dataStore.splice(0)
    }

    //returns front element of queue
    front() {
        return this.dataStore[0];
    }

    //returns last element of queue
    back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    // returns elements of queue in a string
    toString() {
        let returnString = "";
        for (const element of this.dataStore) returnString += element + "\n";
        return returnString;
    }

    //returns true if a queue is empty
    empty() {
        return this.dataStore.length === 0 ? true : false;
    }

    //returns no of elements in queue
    count() { 
        return this.dataStore.length;
    }
}

module.exports = Queue;