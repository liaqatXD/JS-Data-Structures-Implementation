const Stack = require('./stack');

function precedence(op) {
    switch (op) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        default:
            return 0;
    }
}

function isOperand(symbol) {
    return /^[a-zA-Z]$/.test(symbol);
}

function infixToPostfix(expression) {
    const s = new Stack();
    let result = "";

    for (let symbol of expression) {
        if (isOperand(symbol)) {
            result += symbol;
        } else if (symbol === '(') {
            s.push(symbol);
        } else if (symbol === ')') {
            let topElement = s.pop();
            while (topElement !== '(') {
                result += topElement;
                topElement = s.pop();
            }
        } else {
            while (s.length() > 0 && precedence(s.peek()) >= precedence(symbol)) {
                result += s.pop();
            }
            s.push(symbol);
        }
    }

    // Emptying stack
    while (s.length() > 0) {
        result += s.pop();
    }
    
    return result;
}
console.log(infixToPostfix('A*B+(C/D-(E+F*G)*H+I/J*K)-L'))