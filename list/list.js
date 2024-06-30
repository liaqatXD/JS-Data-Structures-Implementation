// list implementation 
class List {
    constructor() {
        this.listSize = 0; // size of list
        this.pos = 0; // indicates list position 
        this.dataStore = []; 
    }
    //adds element at end of list
    append(element) {
        this.dataStore[this.listSize++] = element;
        return true;

    }
    //removes element from list
    remove(element) {
        const foundAt = this.dataStore.indexOf(element);
        if (foundAt === -1) return false;
        else {
            this.dataStore.splice(foundAt, 1);
            this.listSize--;
            return true;
        }
    }

    //returns length of List
    length() {
        return this.listSize;
    }

    //returns list elements
    toString() {
        return this.dataStore;
    }

    //inserts element after a specified element
    insert(after, element) {
        const foundAt = this.dataStore.indexOf(after);
        if (foundAt !== -1) {
            this.dataStore.splice(foundAt + 1, 0, element);
            this.listSize++;
            return true;
        }
        return false;
    }

    //removes all elements from list
    clear() {
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }

    //checks if a given element exists in list
    contains(element) {
        const foundAt = this.dataStore.indexOf(element);
        if (foundAt > -1) return true;
        return false;

    }

    // sets position to first element of list
    front() {
        this.pos = 0;
    }

    // sets position to end element of list
    end() {
        this.pos = this.dataStore.length - 1;
    }

    //displays current element in list
    getElement() {
        return this.dataStore[this.pos];
    }

    //sets position to previous element
    prev() {
        if (this.pos > 0) this.pos--;
    }

    //sets position to next element
    next() {
        if (this.pos < this.listSize - 1) this.pos++;
    }

    //returns current position
    currPos(){
        return this.pos;
    }
}



// customer for rental system
class Customer{
    constructor(name,movie){
        this.name=name;
        this.movie=movie;
    }
}

module.exports={
    List,
    Customer
};
