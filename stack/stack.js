class Stack{
    constructor(){
        this.dataStore=[];
        this.top=0;
    }

    //adds element to top of stack
    push(element){
        this.dataStore[this.top++]=element;
    }

    //removes element from stack
    pop(){
    if(this.top>0)  return this.dataStore[--this.top];
    }

    //returns top element of stack
    peek(){
     return this.dataStore[this.top-1];
    }
    
    //returns the length of stack
    length(){
        return this.top;
    }

    //clears out stack
    clear(){
        this.top=0;
    }
}







module.exports=Stack;
