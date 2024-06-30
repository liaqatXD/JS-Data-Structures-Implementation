//1.Write a function that inserts an element into a list only if the element to be inserted is larger than any of the elements currently in the list.

//2.Write a function that inserts an element into a list only if the element to be inserted is smaller than any of the elements currently in the list.

class List{
    constructor(){
        this.pos=0;
        this.listSize=0;
        this.dataStore=[];
    }

     // sets position to first element of list
     front() {
        this.pos = 0;
    }

    // sets positio to end of list
    end() {
        this.pos = this.dataStore.length - 1;
    }

    //displays current element in list
    getElement() {
        return this.dataStore[this.pos];
    }

    //adds element at end of list
    append(element) {
        this.dataStore[this.listSize++] = element;
        return true;

    }

    //inserts greater element only
    insertGreaterElement(element){
        this.end();
        const listElement=this.getElement();
        if(listElement===undefined) this.append(element);
        else if( listElement<element){
            this.append(element);
        }
    }

    //inserts smaller elements only
    insertSmallerElement(element){
        this.front();
        const listElement=this.getElement();
        if(listElement===undefined  ) this.append(element);
        else if( listElement>element){
            this.dataStore.splice(0,0,element);
            this.listSize++;
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
     //sets position to next element
     next() {
        if (this.pos < this.listSize - 1) this.pos++;
    }
}

// Create a Person class that stores a person’s name and their gender. Create a list of at least 10 Person objects. Write a function that displays all the people in the list of the same gender.

class Person{
    constructor(name,gender){
        this.name=name;
        this.gender=gender;
    }
}

const peopleList=new List();
peopleList.append(new Person('Liaqat Ali','male'));
peopleList.append(new Person('John', 'male'));
peopleList.append(new Person('Emily', 'female'));
peopleList.append(new Person('Michael', 'male'));
peopleList.append(new Person('Sophia', 'female'));
peopleList.append(new Person('James', 'male'));
peopleList.append(new Person('Olivia', 'female'));
peopleList.append(new Person('William', 'male'));
peopleList.append(new Person('Emma', 'female'));
peopleList.append(new Person('Alexander', 'male'));

const displayPeople=(gender)=>{
    for(peopleList.front();peopleList.pos<=peopleList.length()-1;peopleList.next()){
        if(peopleList.getElement()['gender']===gender){
             if(peopleList.pos===peopleList.length()-1) {
                console.log(peopleList.getElement());
                break;
            }
            console.log(peopleList.getElement());
           
        }
       
    }
}

displayPeople('male');


