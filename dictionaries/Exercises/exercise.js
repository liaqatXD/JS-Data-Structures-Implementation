// Using the Dictionary class, write a program that stores the number of occurrences of words in a text. 

// Your program should display each word in a text just once as well as the number of times the word occurs in the text.

// For example, given the text “the brown fox jumped over the blue fox,” the output will be:

/*
the: 2 
brown: 1 
fox: 2
jumped: 1 
over: 1 
blue: 1
*/

const Dictionary=require("../dictionary");
const sentence="the brown fox jumped over the blue fox the";
const d=new Dictionary()

function wordCount(sentence){
    const words=sentence.split(" ");
    for(let word of words){
        if(d.find(word)===undefined)  d.datastore[word]=1;
        else{
            d.datastore[word]+=1;
        }

    }
    d.showAll()
}

wordCount(sentence)