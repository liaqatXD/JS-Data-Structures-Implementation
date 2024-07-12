class Node{
    constructor(element){
        this.element=element;
        this.next=null;
        this.previous=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=new Node("head");
    }

   find(item){
    let currNode=this.head;
    while(currNode!==null && currNode.element!==item){
        currNode=currNode.next;
    }
    return currNode;
   }

   insert(newElement,item)
   {
    const currNode=this.find(item);
    if(currNode!==null){
        const newNode=new Node(newElement);
        newNode.next=currNode.next;
        newNode.previous=currNode;
        if(currNode.next!==null){
            currNode.next.previous=newNode;
        }
        currNode.next=newNode;
    }
   }

   // removes the specified node
   remove(item){
    const currNode=this.find(item);
    if(currNode!==null){
        const prevNode=currNode.previous;
        // console.log(prevNode.element)
        prevNode.next=currNode.next;
      if(currNode.next!==null)  currNode.next.previous=prevNode;
        // currNode.next=null;
        // currNode.previous=null;
    }
   }

   //displays the elements of linked list
   display(){
    let currNode=this.head;
    while(currNode.next!==null){
        console.log(currNode.next.element);
        currNode=currNode.next;
    }
   }

   //displays elements of linked list in reverse order
   dispReverse(){
    let currNode=this.findLast();
    while(currNode.previous!==null){
        console.log(currNode.element);
        currNode=currNode.previous;
    }
   }

    //returns last element of list
    findLast(){
        let currNode=this.head;
        while(currNode.next!==null)currNode=currNode.next;
        return currNode;
    }
   
}
