const Queue = require("./queue");

class PrioriyQueue extends Queue {

    // patient with lower code has higher prority
    dequeue() {
        let index = 0;
        for (let i = 1; i < this.dataStore.length; i++) {
            if (this.dataStore[index].code > this.dataStore[i].code) index = i;
        }
        return this.dataStore.splice(index, 1);
    }

    toString() {
        let returnString = "";
        for (const element of this.dataStore) returnString += element.name + " code:" + element.code + "\n";
        return returnString;
    }

}

class Patient {
    constructor(name, code) {
        this.name = name;
        this.code = code; // code represents patient priority/severity
    }
}

let p = new Patient("Smith", 5);
const ed = new PrioriyQueue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6); 
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p); 
p = new Patient("Ingram", 1); 
ed.enqueue(p); 
console.log(ed.toString()); 
let seen = ed.dequeue(); console.log("Patient being treated: " + seen[0].name); console.log("Patients waiting to be seen: ");
console.log(ed.toString());
 // another round 
  seen = ed.dequeue(); 
  console.log("Patient being treated: " + seen[0].name); console.log("Patients waiting to be seen: ");
   console.log(ed.toString()); 
   seen = ed.dequeue(); 
   console.log("Patient being treated: " + seen[0].name);
   console.log("Patients waiting to be seen: ") 
   console.log(ed.toString());