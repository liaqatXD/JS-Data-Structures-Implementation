class Node{
    constructor(element){
        this.element=element;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=new Node('head');
    }

    // finds the node in the list
    find(item){
        let currNode = this.head; 
        while (currNode!==null && currNode.element != item ) 
            {
                 currNode = currNode.next;
            } 
        return currNode;
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

    //displays the elements of linked list
    display(){
        let currNode=this.head.next;
        while(currNode!==null){
            console.log(currNode.element);
            currNode=currNode.next;
        }
    }

    //finds the previous node for the specified node; returns null if node not found
    findPrevious(item){
        let currNode=this.head;
        while(currNode!==null){
            if(currNode.next?.element===item) break;
            currNode=currNode.next;
        }
        return currNode;
    }

}

module.exports=LinkedList;

const cities = new LinkedList(); 
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway"); 
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle"); 
