// stacks are used to implement recursion as well. In this example, we will calculate the factorial of any digits using stack!


const Stack=require("./stack");

function calculateFactorial(digit){
    const s=new Stack();
    let result=1;
    while(digit>1)s.push(digit--);
    while(s.length()>0)result*=s.pop();
    return result;
}

console.log(calculateFactorial(3));

//Solution: Decrement the digit and keep pushing it to stack until the digit reduces to 1. Then simply, multiply all digits inside stack by popping off one by one and storing the result within a variable.