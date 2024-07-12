class Node{
    constructor(element){
        this.element=element;
        this.next=null;
    }
}
class CircularLinkedList{
    constructor(){
        this.head=new Node("head");
        this.head.next=this.head;
    }
   
    find(item){
        let currNode=this.head;
        while(currNode.next!==this.head && currNode.element!==item){
            currNode=currNode.next;
        }
       return currNode.element===item?currNode:null;
    }

     //inserts the new node "after" specified node
     insert(newElement,item){
        const afterNode=this.find(item);
        if(afterNode!==null){
            const newNode=new Node(newElement);
            newNode.next=afterNode.next;
            afterNode.next=newNode;
        }
    }

    //removes the specified node
    remove(item){
        const prevNode=this.findPrevious(item);
        if(prevNode!==null) prevNode.next=prevNode.next.next;
       
    }

    //displays elements of list
    display(){
        let currNode=this.head;
        while(currNode.next!==this.head){
            console.log(currNode.next.element);
            currNode=currNode.next;

        }
    }

    //finds the previous node for the specified node; returns null if node not found
    findPrevious(item){
        let currNode=this.head;
        while(currNode.next!==this.head){
            if(currNode.next.element===item) break;
            currNode=currNode.next;
        }
        return currNode.next.element===item?currNode:null;
    }
}
