// A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, “dad” is a palindrome; “racecar” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome


const Stack=require('./stack');

function isPalindrome(word){
    const s=new Stack();
    let reverseWord="";
    for(let letter of word){
        s.push(letter);
    }
    while(s.length()>0){
        reverseWord+=s.pop();
    }
    return word===reverseWord; //returns true if its a palindrome; otherwise false
}

console.log(isPalindrome('racecar'));

//Solution: store the string in stack so the stack has original string in reverse order. Simply compare both strings and if both strings are same, they are palindrome