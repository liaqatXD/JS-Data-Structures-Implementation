const LList=require("../linkedList");

//displays Singly Linked list in reverse order
function dispReverse(currNode){
    if(currNode.next!==null){
        dispReverse(currNode.next);
        console.log(currNode.next.element);
    }
    
}


const cities = new LList(); 
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway"); 
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle"); 

// cities.display()
dispReverse(cities.head)