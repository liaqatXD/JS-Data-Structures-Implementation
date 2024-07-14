class Dictionary{
    constructor(){
        this.datastore=[];
    }

    // adds an entry 
    add(key,value){
        this.datastore[key]=value;
    }

    // returns the entry if found, unless undefined
    find(key){
        return this.datastore[key]; 
    }

    // removes an entry
    remove(key){
        delete this.datastore[key];
    }

    // displays all entries in sorted order
    showAll(){
        Object.keys(this.datastore).sort().forEach((key)=>console.log(` ${key} => ${this.datastore[key]}`))
    }

    //returns number of entries in a dictionary
    count(){
        return Object.keys(this.datastore).length;
    }

    //clears out all entries in dictionary
    clear(){
        for(let key of Object.keys(this.datastore)) delete this.datastore[key];
    }
}

module.exports=Dictionary;